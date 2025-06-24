var removeLeafNodes = function (root, target) {
  function dfs(node) {
    if (!node) return null;
    node.left = dfs(node.left);
    node.right = dfs(node.right);
    return node.val === target && !node.left && !node.right ? null : node;
  }
  return dfs(root);
};
