var countSubarrays = function (nums, k) {
  const max = Math.max(...nums);
  let start = 0;
  let count = 0;
  let totalCount = 0;
  for (let end = 0; end < nums.length; end++) {
    if (nums[end] === max) count++;
    while (count >= k) {
      totalCount += nums.length - end;
      if (nums[start] === max) count--;
      start++;
    }
  }
  return totalCount;
};
