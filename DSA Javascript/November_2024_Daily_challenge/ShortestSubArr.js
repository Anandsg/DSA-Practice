var minimumSubarrayLength = function (nums, k) {
  const bits = Array(32).fill(0);

  const getNumFromBits = () => {
    let num = 0;
    for (let i = 0; i < bits.length; i++) {
      if (bits[i] === 0) {
        continue;
      }

      num += 2 ** i;
    }

    return num;
  };

  const syncNumToBits = (num, isAdd) => {
    const s = num.toString(2);
    for (let i = 0; i < s.length; i++) {
      if (s[s.length - 1 - i] === "0") {
        continue;
      }

      if (isAdd) {
        bits[i] += 1;
      } else {
        bits[i] -= 1;
      }
    }
  };

  let l = 0;
  let r = 0;
  syncNumToBits(nums[0], true);

  let min = Number.MAX_SAFE_INTEGER;

  while (l < nums.length || r < nums.length) {
    const current = getNumFromBits();

    if (current >= k) {
      min = Math.min(min, r - l + 1);

      if (l === r) {
        if (r === nums.length - 1) {
          return min === Number.MAX_SAFE_INTEGER ? -1 : min;
        }

        r += 1;
        syncNumToBits(nums[r], true);
      }

      syncNumToBits(nums[l], false);
      l += 1;

      continue;
    }

    if (r === nums.length - 1) {
      return min === Number.MAX_SAFE_INTEGER ? -1 : min;
    }

    r += 1;
    syncNumToBits(nums[r], true);
  }

  return min === Number.MAX_SAFE_INTEGER ? -1 : min;
};
