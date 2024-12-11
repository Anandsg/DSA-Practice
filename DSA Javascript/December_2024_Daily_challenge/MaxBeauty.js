const maximumBeauty = (nums, k) => {
  nums.sort((a, b) => a - b);
  let l = 0;
  nums.forEach((num) => (l += num - nums[l] > k * 2));
  return nums.length - l;
};
