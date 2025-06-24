/**
 * @param {number[][]} points
 * @return {number}
 */
var maxPoints = function (points) {
  const m = points.length; // number of rows
  const n = points[0].length; // number of columns

  // Initialize dp array with the values from the first row
  let dp = points[0].slice();

  // Iterate through each row starting from the second one
  for (let r = 1; r < m; r++) {
    // Create an array to store the maximum points up to the current row
    const newDp = new Array(n).fill(0);

    // If there's only one column, directly add the points of the current row
    if (n === 1) {
      newDp[0] = dp[0] + points[r][0];
    } else {
      // Left to right pass to maintain the maximum values considering penalties
      let leftMax = dp[0];
      newDp[0] = leftMax + points[r][0];
      for (let c = 1; c < n; c++) {
        leftMax = Math.max(leftMax - 1, dp[c]);
        newDp[c] = leftMax + points[r][c];
      }

      // Right to left pass to maintain the maximum values considering penalties
      let rightMax = dp[n - 1];
      for (let c = n - 2; c >= 0; c--) {
        rightMax = Math.max(rightMax - 1, dp[c]);
        newDp[c] = Math.max(newDp[c], rightMax + points[r][c]);
      }
    }

    // Update dp with the new maximum values
    dp = newDp;
  }

  // Return the maximum value from the last row
  return Math.max(...dp);
};
