function strangePrinter(s) {
  const n = s.length;
  if (n === 0) return 0;

  // Initialize dp array
  const dp = new Array(n).fill(null).map(() => new Array(n).fill(0));

  // Base case: Single character
  for (let i = 0; i < n; i++) {
    dp[i][i] = 1;
  }

  // Fill the dp table
  for (let len = 2; len <= n; len++) {
    // len is the length of substring
    for (let i = 0; i <= n - len; i++) {
      const j = i + len - 1;
      dp[i][j] = len; // worst case: print each character in separate turn

      // Check if s[i] can be covered by s[i+1...j]
      if (s[i] === s[j]) {
        dp[i][j] = dp[i][j - 1];
      } else {
        // Try all possible splits
        for (let k = i; k < j; k++) {
          dp[i][j] = Math.min(dp[i][j], dp[i][k] + dp[k + 1][j]);
        }
      }
    }
  }

  return dp[0][n - 1];
}

// Example usage:
console.log(strangePrinter("aaabbb")); // Output: 2
console.log(strangePrinter("aba")); // Output: 2
