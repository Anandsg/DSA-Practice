var numMagicSquaresInside = function (grid) {
  const isMagic = (r, c) => {
    // All 3x3 squares should start with [r, c] as the top-left corner
    const nums = new Set();
    let sum = null;

    // Check if the numbers are 1 to 9 and no duplicates
    for (let i = 0; i < 3; i++) {
      let rowSum = 0;
      let colSum = 0;
      for (let j = 0; j < 3; j++) {
        let num = grid[r + i][c + j];
        if (num < 1 || num > 9 || nums.has(num)) {
          return false;
        }
        nums.add(num);
        rowSum += num;
        colSum += grid[r + j][c + i];
      }
      // Check if the sum of the current row or column is consistent
      if (sum === null) {
        sum = rowSum;
      } else if (rowSum !== sum || colSum !== sum) {
        return false;
      }
    }

    // Check the two diagonals
    const diag1 = grid[r][c] + grid[r + 1][c + 1] + grid[r + 2][c + 2];
    const diag2 = grid[r][c + 2] + grid[r + 1][c + 1] + grid[r + 2][c];

    return diag1 === sum && diag2 === sum;
  };

  let count = 0;

  for (let i = 0; i <= grid.length - 3; i++) {
    for (let j = 0; j <= grid[0].length - 3; j++) {
      if (isMagic(i, j)) {
        count++;
      }
    }
  }

  return count;
};
