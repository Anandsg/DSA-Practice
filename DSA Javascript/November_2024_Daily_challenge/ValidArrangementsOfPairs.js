var validArrangement = function (pairs) {
  const graph = new Map();
  const inDegree = new Map();
  const outDegree = new Map();

  for (const [start, end] of pairs) {
    if (!graph.has(start)) graph.set(start, []);
    graph.get(start).push(end);

    outDegree.set(start, (outDegree.get(start) || 0) + 1);
    inDegree.set(end, (inDegree.get(end) || 0) + 1);
  }

  let startNode = pairs[0][0];
  for (const [node, count] of outDegree) {
    if (count - (inDegree.get(node) || 0) === 1) {
      startNode = node;
      break;
    }
  }

  const result = [];
  const dfs = (node) => {
    const edges = graph.get(node) || [];
    while (edges.length) {
      const nextNode = edges.pop();
      dfs(nextNode);
      result.push([node, nextNode]);
    }
  };

  dfs(startNode);
  return result.reverse();
};
