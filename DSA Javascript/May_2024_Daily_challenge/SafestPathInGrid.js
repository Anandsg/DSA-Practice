var maximumSafenessFactor = function (grid) {
  const n = grid.length;
  for (let i = 0; i < queue.length; i++) {
    const [r, c] = queue[i];
    for (const [dr, dc] of directions) {
      const nr = r + dr;
      const nc = c + dc;
      if (isInBound(nr, nc) && dist[nr][nc] === Infinity) {
        dist[nr][nc] = dist[r][c] + 1;
        queue.push([nr, nc]);
      }
    }
  }
  const maxDistance = Array.from({ length: n }, () => Array(n).fill(0));
  queue.length = 0;
  return maxDistance[n - 1][n - 1];
};
