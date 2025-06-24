var MOD = 1e9 + 7;
var rangeSum = function (nums, n, left, right) {
  const sums = [];

  for (let j = 0; j < n; j++) {
    let prefixSum = 0;
    for (let i = j; i < n; i++) {
      prefixSum += nums[i];
      sums.push(prefixSum);
    }
  }

  sums.sort((a, b) => a - b);
  let result = 0;

  for (let i = left - 1; i < right; i++) {
    result = (result + sums[i]) % MOD;
  }
  return result;
};
