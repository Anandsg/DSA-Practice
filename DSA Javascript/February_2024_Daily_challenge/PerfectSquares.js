var numSquares = function (n) {
  let dp = new Array(n + 1).fill(Infinity);
  dp[0] = 0;
  for (let i = 1; i <= n; ++i) {
    let min_val = Infinity;
    for (let j = 1; j * j <= i; ++j) {
      min_val = Math.min(min_val, dp[i - j * j] + 1);
    }
    dp[i] = min_val;
  }
  return dp[n];
};
