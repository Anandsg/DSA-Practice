var nthUglyNumber = function (n) {
  let dp = [1];
  let c2 = (c3 = c5 = 0);
  for (let i = 1; i < n; i++) {
    dp[i] = Math.min(2 * dp[c2], 3 * dp[c3], 5 * dp[c5]);
    if (2 * dp[c2] === dp[i]) c2++;
    if (3 * dp[c3] === dp[i]) c3++;
    if (5 * dp[c5] === dp[i]) c5++;
  }
  return dp[n - 1];
};
