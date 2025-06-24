/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function (grid) {
  const rowLength = grid.length;
  const colLength = grid[0].length || 0;
  let count = 0;
  for (let i = 0; i < rowLength; i++) {
    for (let j = 0; j < colLength; j++) {
      if (grid[i][j] === 1) {
        // top
        if (i < 1 || (i >= 1 && grid[i - 1][j] === 0)) {
          count++;
        }

        // left
        if (j < 1 || (j >= 1 && grid[i][j - 1] === 0)) {
          count++;
        }

        // right
        if (j == colLength - 1 || (j < colLength - 1 && grid[i][j + 1] === 0)) {
          count++;
        }

        // bottom
        if (i == rowLength - 1 || (i < rowLength - 1 && grid[i + 1][j] === 0)) {
          count++;
        }
      }
    }
  }
  return count || 0;
};
