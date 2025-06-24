var intersection = function (nums1, nums2) {
  let arr = [];
  for (let num of nums1) {
    if (nums2.includes(num) && !arr.includes(num)) {
      arr.push(num);
    }
  }
  return arr;
};
