var countSubIslands = function (grid1, grid2) {
  const m = grid1.length;
  const n = grid1[0].length;

  const dfs = (i, j) => {
    if (i < 0 || j < 0 || i >= m || j >= n || grid2[i][j] === 0) {
      return true;
    }

    if (grid1[i][j] === 0) {
      return false;
    }

    grid2[i][j] = 0; // Mark the cell as visited

    let isSubIsland = true;
    isSubIsland &= dfs(i + 1, j);
    isSubIsland &= dfs(i - 1, j);
    isSubIsland &= dfs(i, j + 1);
    isSubIsland &= dfs(i, j - 1);

    return isSubIsland;
  };

  let subIslandsCount = 0;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid2[i][j] === 1) {
        if (dfs(i, j)) {
          subIslandsCount++;
        }
      }
    }
  }

  return subIslandsCount;
};
