var cherryPickup = function (grid) {
  const rows = grid.length;
  const cols = grid[0].length;

  const dp = new Array(rows)
    .fill(null)
    .map(() => new Array(cols).fill(null).map(() => new Array(cols).fill(-1)));

  function jak(i, j1, j2) {
    if (i === rows) {
      return 0;
    }
    if (dp[i][j1][j2] !== -1) {
      return dp[i][j1][j2];
    }

    const cherries = grid[i][j1] + (j1 !== j2 ? grid[i][j2] : 0);
    let jakA = 0;

    for (let d1 = -1; d1 <= 1; d1++) {
      for (let d2 = -1; d2 <= 1; d2++) {
        const nj1 = j1 + d1;
        const nj2 = j2 + d2;
        if (nj1 >= 0 && nj1 < cols && nj2 >= 0 && nj2 < cols) {
          jakA = Math.max(jakA, jak(i + 1, nj1, nj2));
        }
      }
    }

    dp[i][j1][j2] = cherries + jakA;
    return dp[i][j1][j2];
  }

  return jak(0, 0, cols - 1);
};
