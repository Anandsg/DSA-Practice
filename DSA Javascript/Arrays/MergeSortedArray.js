var merge = function(nums1, m, nums2, n) {
    let i = m + n - 1;
    let j = n;
  
    while (j > 0) {
      nums1[i] = nums2[j - 1];
      i--;
      j--;
    }
  
    for (let index = 0; index < nums1.length - 1; index++) {
      for (let jndex = index + 1; jndex <= nums1.length; jndex++) {
        if (nums1[index] > nums1[jndex]) {
          let temp = nums1[index];
          nums1[index] = nums1[jndex];
          nums1[jndex] = temp;
        }
      }
    }
  };