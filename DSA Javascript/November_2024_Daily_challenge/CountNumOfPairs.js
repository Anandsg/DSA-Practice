var countFairPairs = function (nums, lower, upper) {
  nums.sort((a, b) => a - b);
  let count = 0;

  function countLessThanOrEqualTo(target) {
    let left = 0,
      right = nums.length - 1,
      pairs = 0;
    while (left < right) {
      if (nums[left] + nums[right] <= target) {
        pairs += right - left;
        left++;
      } else {
        right--;
      }
    }
    return pairs;
  }

  return countLessThanOrEqualTo(upper) - countLessThanOrEqualTo(lower - 1);
};
