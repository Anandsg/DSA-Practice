function countSquares(matrix) {
  if (!matrix.length || !matrix[0].length) return 0;
  let count = 0;
  let rows = matrix.length;
  let cols = matrix[0].length;
  let dp = Array.from({ length: rows }, () => Array(cols).fill(0));

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (matrix[i][j] === 1) {
        dp[i][j] =
          i === 0 || j === 0
            ? 1
            : Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1;
        count += dp[i][j];
      }
    }
  }

  return count;
}
