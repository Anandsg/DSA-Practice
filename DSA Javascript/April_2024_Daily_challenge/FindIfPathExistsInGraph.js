var validPath = function (n, edges, start, end) {
  const map = new Map();
  let found = false;
  for (let i = 0; i < n; i++) {
    map.set(i, new Set());
  }
  for (const [v, u] of edges) {
    map.get(v).add(u);
    map.get(u).add(v);
  }
  const visited = new Set();
  function dfs(at) {
    if (visited.has(at)) return;
    visited.add(at);
    if (at === end) {
      found = true;
      return;
    }
    for (const v of [...map.get(at)]) {
      dfs(v);
      visited.add(v);
    }
    visited.delete(at);
  }
  dfs(start);
  return found;
};
