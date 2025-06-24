var findPaths = function (m, n, maxMove, startRow, startColumn) {
  const R = m;
  const C = n;
  const MOD = 10 ** 9 + 7;

  const cache = new Map();

  function dfs(r, c, moves) {
    if (r < 0 || c < 0 || r === R || c === C) return 1;

    if (moves === 0) return 0;

    const key = "-" + r + "-" + c + "-" + moves;

    if (cache.has(key)) return cache.get(key);

    let val =
      (((dfs(r + 1, c, moves - 1) + dfs(r, c + 1, moves - 1)) % MOD) +
        ((dfs(r - 1, c, moves - 1) + dfs(r, c - 1, moves - 1)) % MOD)) %
      MOD;

    cache.set(key, val);

    return cache.get(key);
  }

  return dfs(startRow, startColumn, maxMove);
};
