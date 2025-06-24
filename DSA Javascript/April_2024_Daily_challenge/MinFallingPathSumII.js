var minFallingPathSum = function (grid, n = grid.length) {
  const minimalLine = grid[0];
  for (let i = 1; i < n; i++) {
    const [minimal, secondMinimal] = [...minimalLine].sort((x, y) => x - y);
    for (let j = 0; j < n; j++) {
      minimalLine[j] =
        grid[i][j] + (minimalLine[j] === minimal ? secondMinimal : minimal);
    }
  }
  return Math.min(...minimalLine);
};
