var maxSumAfterPartitioning = function (arr, k) {
  let n = arr.length;
  let dp = new Array(n + 1).fill(0);

  for (let i = 1; i <= n; i++) {
    let max = 0;
    let maxSum = 0;
    for (let j = 1; j <= k && i - j >= 0; j++) {
      max = Math.max(max, arr[i - j]);
      maxSum = Math.max(maxSum, dp[i - j] + max * j);
    }
    dp[i] = maxSum;
  }

  return dp[n];
};
