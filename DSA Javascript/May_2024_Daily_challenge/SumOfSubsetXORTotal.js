var subsetXORSum = function (nums) {
  let result = 0;
  let n = nums.length;

  if (n < 0) {
    return 0;
  }

  for (let i = 0; i < Math.pow(2, n); i++) {
    let subsetXOR = 0;
    for (let j = 0; j < n; j++) {
      if ((i & (1 << j)) !== 0) {
        subsetXOR ^= nums[j];
      }
    }
    result += subsetXOR;
  }
  return result;
};
