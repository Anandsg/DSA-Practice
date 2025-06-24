var getAncestors = function (n, edges) {
  const graph = new Array(n).fill(0).map(() => []);
  const inDegree = new Array(n).fill(0);
  const ancestors = new Array(n).fill(0).map(() => new Set());

  // Build the graph and compute in-degrees
  for (const [u, v] of edges) {
    graph[u].push(v);
    inDegree[v]++;
  }

  // Topological sort using Kahn's algorithm
  const queue = [];
  for (let i = 0; i < n; i++) {
    if (inDegree[i] === 0) queue.push(i);
  }

  while (queue.length > 0) {
    const node = queue.shift();

    for (const neighbor of graph[node]) {
      ancestors[neighbor].add(node);
      for (const anc of ancestors[node]) {
        ancestors[neighbor].add(anc);
      }

      inDegree[neighbor]--;
      if (inDegree[neighbor] === 0) {
        queue.push(neighbor);
      }
    }
  }

  // Convert sets to sorted arrays
  return ancestors.map((anc) => Array.from(anc).sort((a, b) => a - b));
};
