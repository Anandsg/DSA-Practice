var findMaxK = function (nums) {
  let arr = [-1];
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === -nums[j]) arr.push(Math.abs(nums[j]));
    }
  }

  return Math.max(...arr);
};
