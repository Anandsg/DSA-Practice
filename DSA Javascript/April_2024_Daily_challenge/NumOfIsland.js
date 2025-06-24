var numIslands = function (grid) {
  let totalIslands = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] == "1") {
        totalIslands += island(grid, i, j);
      }
    }
  }
  return totalIslands;
};

function island(grid, i, j) {
  if (
    i < 0 ||
    j < 0 ||
    i >= grid.length ||
    j >= grid[0].length ||
    grid[i][j] == "0"
  )
    return;
  grid[i][j] = 0;
  island(grid, i + 1, j);
  island(grid, i, j + 1);
  island(grid, i - 1, j);
  island(grid, i, j - 1);
  return 1;
}
