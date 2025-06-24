var beautifulSubsets = function (nums, k) {
  let freq = {};
  nums.sort((a, b) => a - b);
  const subset = (i) => {
    if (i == nums.length) {
      return 1;
    }
    let res = subset(i + 1);
    const selected = freq[nums[i] - k] > 0;
    if (!selected) {
      freq[nums[i]] = (freq[nums[i]] || 0) + 1;
      res += subset(i + 1);
      freq[nums[i]] = (freq[nums[i]] || 0) - 1;

      if (freq[nums[i]] == 0) {
        delete freq[nums[i]];
      }
    }
    return res;
  };
  return subset(0) - 1;
};
