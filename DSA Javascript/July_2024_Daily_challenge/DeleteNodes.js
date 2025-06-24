var delNodes = function (root, to_delete) {
  const res = [];
  to_delete = new Set(to_delete);
  const dfs = (node, is_root) => {
    if (!node) return null;
    const is_delete = to_delete.has(node.val);
    if (is_root && !is_delete) {
      res.push(node);
    }
    node.left = dfs(node?.left, is_delete);
    node.right = dfs(node?.right, is_delete);
    return is_delete ? null : node;
  };
  dfs(root, true);
  return res;
};
