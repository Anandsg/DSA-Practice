var firstMissingPositive = function (nums) {
  nums = nums.sort((a, b) => a - b);
  let nul = nums.indexOf(0);
  let ans = 0;
  let count = 0;
  for (let i = nul; i < nums.length; i++) {
    if (nums[i] > 0) {
      if (nums[i] != nums[i - 1]) count += 1;
      if (nums[i] != count) return count;
      if (i == nums.length - 1) return nums[i] + 1;
    }
  }
  return 1;
};
