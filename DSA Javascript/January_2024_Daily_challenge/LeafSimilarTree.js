var leafSimilar = function (root1, root2) {
  const output1 = [];
  const output2 = [];

  dfs(root1, output1);
  dfs(root2, output2);

  return (
    output1.length == output2.length &&
    output1.every((val, index) => val === output2[index])
  );

  function dfs(node, output) {
    if (!node) return;
    // Leaf node if the current ndoe has no children
    // Push value into it's respective array
    if (!node.left && !node.right) {
      output.push(node.val);
      return;
    }
    if (node.left) dfs(node.left, output);
    if (node.right) dfs(node.right, output);
  }
};
