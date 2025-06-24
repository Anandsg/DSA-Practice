var findDuplicates = function (nums) {
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    let position = Math.abs(nums[i]) - 1;
    if (nums[position] < 0) result.push(Math.abs(nums[i]));
    nums[position] *= -1;
  }
  return result;
};
