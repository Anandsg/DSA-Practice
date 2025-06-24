var find_max = (grid, x, y) => {
  let max = grid[x][y];
  for (let i = -1; i < 2; i++) {
    for (let j = -1; j < 2; j++) {
      if (grid[x + i][y + j] > max) {
        max = grid[x + i][y + j];
      }
    }
  }
  return max;
};

var largestLocal = function (grid) {
  let maxLocal = [];
  let temp1 = [];
  for (let i = 1; i < grid.length - 1; i++) {
    for (let j = 1; j < grid.length - 1; j++) {
      let temp2 = find_max(grid, i, j);
      temp1.push(temp2);
    }
    maxLocal.push(temp1);
    temp1 = [];
  }
  return maxLocal;
};
