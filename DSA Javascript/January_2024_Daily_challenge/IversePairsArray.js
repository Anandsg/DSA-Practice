var kInversePairs = function (n, k) {
  const MOD = 1000000007;
  const dp = Array.from({ length: n + 1 }, () => Array(k + 1).fill(0));
  dp[1][0] = 1;

  for (let i = 2; i <= n; i++) {
    let prefixSum = 0;
    for (let j = 0; j <= k; j++) {
      prefixSum = (prefixSum + dp[i - 1][j]) % MOD;
      if (j - i >= 0) {
        prefixSum = (prefixSum - dp[i - 1][j - i] + MOD) % MOD;
      }
      dp[i][j] = prefixSum;
    }
  }
  return dp[n][k];
};
