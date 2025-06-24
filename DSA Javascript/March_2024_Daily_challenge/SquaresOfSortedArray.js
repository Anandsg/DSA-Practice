var sortedSquares = function (nums) {
  let start = 0;
  let end = nums.length - 1;
  let idx = end;
  let sortPowArr = [];

  while (idx > -1) {
    if (Math.abs(nums[start]) > Math.abs(nums[end])) {
      sortPowArr[idx--] = nums[start] * nums[start];
      start++;
    } else {
      sortPowArr[idx--] = nums[end] * nums[end];
      end--;
    }
  }
  return sortPowArr;
};
