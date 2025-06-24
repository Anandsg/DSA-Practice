var divideArray = function (nums, k) {
  nums.sort((a, b) => a - b);
  console.log(nums);
  const ans = [];
  let i = 0;
  let arr = [];
  for (let i = nums.length - 1; i > 0; i -= 3) {
    if (nums[i] - nums[i - 1] > k || nums[i] - nums[i - 2] > k) {
      return [];
    }

    arr.push(nums[i]);
    arr.push(nums[i - 1]);
    arr.push(nums[i - 2]);
    if (arr.length === 3) {
      ans.push(arr);
      arr = [];
    }
  }
  return ans;
};
