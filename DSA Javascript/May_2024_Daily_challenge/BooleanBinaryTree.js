var evaluateTree = function (root) {
  let left = false;
  let right = false;

  if (root.left != null) {
    left = evaluateTree(root.left);
  }
  if (root.right != null) {
    right = evaluateTree(root.right);
  }

  switch (root.val) {
    case 0:
      return false;
    case 1:
      return true;
    case 2:
      return left || right;
    case 3:
      return left && right;
    default:
      return false;
  }
};
