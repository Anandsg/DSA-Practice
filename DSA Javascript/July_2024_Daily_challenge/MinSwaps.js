var minSwaps = function (nums) {
  let totalOnes = nums.reduce((sum, num) => sum + num, 0);
  let currentOnes = nums.slice(-totalOnes).reduce((sum, num) => sum + num, 0);
  let maxFill = currentOnes;

  for (let i = 0; i < nums.length; i++) {
    currentOnes += nums[i] - nums[(i - totalOnes + nums.length) % nums.length];
    maxFill = Math.max(maxFill, currentOnes);
  }

  return totalOnes - maxFill;
};
