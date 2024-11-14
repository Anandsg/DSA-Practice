var hasPathSum = function (root, targetSum) {
  if (root == null) return false;
  if (root.val == targetSum && root.left == null && root.right == null)
    return true;
  return (
    hasPathSum(root.left, targetSum - root.val) ||
    hasPathSum(root.right, targetSum - root.val)
  );
};
