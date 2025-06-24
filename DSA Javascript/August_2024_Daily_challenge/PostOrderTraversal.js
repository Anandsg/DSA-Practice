var postorderTraversal = function (root) {
  const result = [];

  function traverse(node) {
    if (node === null) {
      return;
    }
    traverse(node.left);
    traverse(node.right);
    result.push(node.val);
  }

  traverse(root);
  return result;
};
