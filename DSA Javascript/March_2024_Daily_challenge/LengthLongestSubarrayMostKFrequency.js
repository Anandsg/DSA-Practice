var maxSubarrayLength = function (nums, k) {
  let left = 0,
    right = 0;
  let maxLen = 0;
  const dict = {};

  while (right < nums.length) {
    dict[nums[right]] = (dict[nums[right]] ?? 0) + 1;

    while (dict[nums[right]] > k && left <= right) {
      dict[nums[left]] = dict[nums[left]] - 1;
      left++;
    }

    maxLen = Math.max(maxLen, right - left + 1);
    right++;
  }

  return maxLen;
};
