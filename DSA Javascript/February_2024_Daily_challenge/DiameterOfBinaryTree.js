function diameterOfBinaryTree(root) {
  let max = 0;

  function maxDepth(root) {
    if (root === null) return 0;
    let left = maxDepth(root.left);
    let right = maxDepth(root.right);
    max = Math.max(max, left + right);
    return Math.max(left, right) + 1;
  }

  maxDepth(root);
  return max;
}
