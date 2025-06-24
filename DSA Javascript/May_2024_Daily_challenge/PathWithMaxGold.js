var getMaximumGold = function (grid) {
  const X = [-1, 0, 1, 0];
  const Y = [0, 1, 0, -1];

  const isBoundary = (i, j, n, m) => {
    return i >= 0 && j >= 0 && i < n && j < m;
  };

  const DFS = (r, c, grid) => {
    if (!isBoundary(r, c, grid.length, grid[0].length) || grid[r][c] === 0) {
      return 0;
    }
    let originalValue = grid[r][c];
    let curr = originalValue;
    grid[r][c] = 0; // mark as visited

    for (let k = 0; k < 4; k++) {
      let i = r + X[k];
      let j = c + Y[k];
      curr = Math.max(curr, originalValue + DFS(i, j, grid));
    }

    grid[r][c] = originalValue; // unmark
    return curr;
  };

  let res = 0;
  let rows = grid.length;
  let cols = grid[0].length;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] !== 0) {
        res = Math.max(res, DFS(i, j, grid));
      }
    }
  }
  return res;
};
