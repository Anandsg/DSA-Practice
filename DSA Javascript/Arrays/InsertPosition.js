/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

const findExactPath = (nums, target, start, end) => {
  let mid = Math.floor(start + (end - start) / 2);

  while (start < end) {
    if (nums[mid] == target) return mid; // // found this element
    else if (nums[mid] < target)
      start = mid + 1; // search in right side of the array
    else end = mid; // search in left side of the array

    mid = Math.floor(start + (end - start) / 2);
  }

  return mid;
};
var searchInsert = function (nums, target) {
  let n = nums.length;

  if (n == 1 && nums[0] == target) return 0;

  const path = findExactPath(nums, target, 0, n);

  return path;
};
