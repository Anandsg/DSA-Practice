interface TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
}

function bstToGst(root: TreeNode | null): TreeNode | null {
  let lastSum = 0;
  const bstToGstRunner = (node: TreeNode | null): TreeNode | null => {
    if (node === null) return null;
    node.right = bstToGstRunner(node.right);
    node.val += lastSum;
    lastSum = node.val;
    node.left = bstToGstRunner(node.left);
    return node;
  };
  return bstToGstRunner(root);
}
