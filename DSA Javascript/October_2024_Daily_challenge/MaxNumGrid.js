function maxMoves(grid) {
  const m = grid.length,
    n = grid[0].length;
  const memo = Array.from({ length: m }, () => Array(n).fill(-1));

  function dfs(row, col) {
    if (col === n) return 0;
    if (memo[row][col] !== -1) return memo[row][col];

    let maxMoves = 0;
    for (let newRow of [row - 1, row, row + 1]) {
      if (newRow >= 0 && newRow < m && grid[newRow][col + 1] > grid[row][col]) {
        maxMoves = Math.max(maxMoves, 1 + dfs(newRow, col + 1));
      }
    }
    memo[row][col] = maxMoves;
    return maxMoves;
  }

  let result = 0;
  for (let row = 0; row < m; row++) {
    result = Math.max(result, dfs(row, 0));
  }
  return result;
}
