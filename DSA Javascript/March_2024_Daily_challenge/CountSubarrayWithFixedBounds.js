var countSubarrays = function (nums, minK, maxK) {
  let minI = (maxI = -1);
  let left = (right = 0);
  let ans = 0;
  while (right < nums.length) {
    if (nums[right] < minK || nums[right] > maxK) {
      right++;
      left = right;
      minI = maxI = -1;
      continue;
    }
    if (nums[right] == minK) {
      minI = right;
    }
    if (nums[right] == maxK) {
      maxI = right;
    }
    if (minI >= left && maxI >= left) {
      ans += Math.min(minI, maxI) - left + 1;
    }
    right++;
  }
  return ans;
};
