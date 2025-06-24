var replaceValueInTree = function (root) {
  const levels = [];
  const sumLevels = (parent, node, level) => {
    if (node) {
      levels[level] = (levels[level] ?? 0) + node.val;
      if (parent) {
        node.sibVal = (parent.left?.val ?? 0) + (parent.right?.val ?? 0);
      }
      sumLevels(node, node.left, level + 1);
      sumLevels(node, node.right, level + 1);
    }
  };

  sumLevels(null, root, 0);
  root.sibVal = root.val;
  const updateVal = (node, level) => {
    if (node) {
      node.val = levels[level] - node.sibVal;
      delete node.sibVal;
      updateVal(node.left, level + 1);
      updateVal(node.right, level + 1);
    }
  };

  updateVal(root, 0);
  return root;
};
