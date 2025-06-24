/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function (text1, text2) {
  const n = text1.length;
  const m = text2.length;

  // Initialize a 2D array to store LCS lengths
  const dp = Array.from(Array(n + 1), () => Array(m + 1).fill(0));

  // Dynamic Programming Bottom-Up Approach
  for (let i = n - 1; i >= 0; i--) {
    for (let j = m - 1; j >= 0; j--) {
      const c1 = text1[i];
      const c2 = text2[j];

      if (c1 === c2) {
        dp[i][j] = 1 + dp[i + 1][j + 1];
      } else {
        dp[i][j] = Math.max(dp[i + 1][j], dp[i][j + 1]);
      }
    }
  }

  // Result is stored in dp[0][0], representing the length of LCS
  return dp[0][0];
};
