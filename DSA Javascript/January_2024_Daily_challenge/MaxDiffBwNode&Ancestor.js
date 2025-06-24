var maxAncestorDiff = function (root) {
  const rec = (node, max, min) => {
    if (!node) {
      return max - min;
    }
    max = Math.max(max, node.val);
    min = Math.min(min, node.val);
    return Math.max(rec(node.left, max, min), rec(node.right, max, min));
  };
  return rec(root, root.val, root.val);
};
