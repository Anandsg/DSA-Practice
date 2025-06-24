var minimumOperations = function (root) {
  const levels = [];
  const traverse = (node, depth) => {
    if (!node) return;
    if (!levels[depth]) levels[depth] = [];
    levels[depth].push(node.val);
    traverse(node.left, depth + 1);
    traverse(node.right, depth + 1);
  };
  traverse(root, 0);

  const countSwaps = (arr) => {
    const n = arr.length;
    const sorted = [...arr].map((v, i) => [v, i]).sort((a, b) => a[0] - b[0]);
    const visited = new Array(n).fill(false);
    let swaps = 0;

    for (let i = 0; i < n; i++) {
      if (visited[i] || sorted[i][1] === i) continue;
      let cycleSize = 0,
        j = i;

      while (!visited[j]) {
        visited[j] = true;
        j = sorted[j][1];
        cycleSize++;
      }
      if (cycleSize > 1) swaps += cycleSize - 1;
    }
    return swaps;
  };

  return levels.reduce((ops, level) => ops + countSwaps(level), 0);
};
