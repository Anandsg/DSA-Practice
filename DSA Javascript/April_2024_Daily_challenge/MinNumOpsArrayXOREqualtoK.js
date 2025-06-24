var minOperations = function (nums, k) {
  let ans = 0;
  let x = nums.reduce((x, num) => x ^ num, 0);
  while (x + k) {
    ans += (x + k) & 1;
    x >>= 1;
    k >>= 1;
  }
  return ans;
};
