var countUnguarded = function (m, n, guards, walls) {
  const dirs = [-1, 0, 1, 0, -1];

  let totSize = m * n;

  const blocked = new Set();

  for (const [row, col] of guards) {
    blocked.add(`${row}#${col}`);
  }

  for (const [row, col] of walls) {
    blocked.add(`${row}#${col}`);
  }

  const visited = new Set();

  for (const [startRow, startCol] of guards) {
    for (let i = 0; i < dirs.length - 1; ++i) {
      const rowDir = dirs[i];
      const colDir = dirs[i + 1];

      let currRow = startRow + rowDir;
      let currCol = startCol + colDir;

      while (withinBound(currRow, currCol)) {
        if (blocked.has(`${currRow}#${currCol}`)) break;

        visited.add(`${currRow}#${currCol}`);

        currRow += rowDir;
        currCol += colDir;
      }
    }
  }

  return totSize - visited.size - blocked.size;

  function withinBound(row, col) {
    return row >= 0 && col >= 0 && row < m && col < n;
  }
};
