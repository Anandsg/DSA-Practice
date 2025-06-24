var sumNumbers = function (root) {
  let ans = 0;

  const dfs = (node, path) => {
    if (!node) return;
    if (!node.left && !node.right) {
      ans += path * 10 + node.val;
      return;
    }
    dfs(node.left, path * 10 + node.val);
    dfs(node.right, path * 10 + node.val);
  };

  dfs(root, 0);
  return ans;
};
