var findMinHeightTrees = function (n, edges) {
  if (n === 1) {
    return [0];
  }

  const indegrees = new Array(n).fill(0);
  const graph = new Map();

  for (let i = 0; i < n; i++) {
    graph.set(i, []);
  }

  for (const [e1, e2] of edges) {
    graph.get(e1).push(e2);
    graph.get(e2).push(e1);

    indegrees[e1] += 1;
    indegrees[e2] += 1;
  }

  const queue = [];

  for (let i = 0; i < n; i++) {
    if (indegrees[i] === 1) {
      queue.push(i);
    }
  }

  while (n > 2) {
    let size = queue.length;
    n -= size;

    while (size > 0) {
      const node = queue.shift();
      size -= 1;

      for (const neighbour of graph.get(node)) {
        indegrees[neighbour] -= 1;

        if (indegrees[neighbour] === 1) {
          queue.push(neighbour);
        }
      }
    }
  }

  return queue;
};
