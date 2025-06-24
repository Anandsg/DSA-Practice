function stoneGameII(piles) {
  const n = piles.length;
  const dp = Array.from({ length: n + 1 }, () => Array(n + 1).fill(0));
  const suffixSum = Array(n + 1).fill(0);

  // Calculate suffix sum array
  for (let i = n - 1; i >= 0; i--) {
    suffixSum[i] = suffixSum[i + 1] + piles[i];
  }

  // dp[i][M] represents the maximum stones the current player can get
  // starting from index i with M as the current value of M.
  for (let i = n - 1; i >= 0; i--) {
    for (let m = 1; m <= n; m++) {
      for (let x = 1; x <= 2 * m && i + x <= n; x++) {
        dp[i][m] = Math.max(dp[i][m], suffixSum[i] - dp[i + x][Math.max(m, x)]);
      }
    }
  }

  // The result is the maximum stones Alice can get starting from the first pile with M = 1
  return dp[0][1];
}
