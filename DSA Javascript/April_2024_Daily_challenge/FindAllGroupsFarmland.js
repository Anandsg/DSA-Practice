var findFarmland = function (land) {
  let res = [];
  function dfs(i, j) {
    if (
      i < 0 ||
      j < 0 ||
      i >= land.length ||
      j >= land[i].length ||
      land[i][j] !== 1
    ) {
      return [i - 1, j - 1];
    }
    land[i][j] = 2;
    let bottomRight = dfs(i + 1, j);
    let topRight = dfs(i, j + 1);
    return [Math.max(i, bottomRight[0]), Math.max(j, topRight[1])];
  }
  for (i = 0; i < land.length; i++) {
    for (j = 0; j < land[0].length; j++) {
      if (land[i][j] === 1) {
        let bottomRight = dfs(i, j);
        res.push([i, j, bottomRight[0], bottomRight[1]]);
      }
    }
  }
  return res;
};
