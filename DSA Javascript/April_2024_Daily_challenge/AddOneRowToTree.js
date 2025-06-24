/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @param {number} depth
 * @return {TreeNode}
 */
var addOneRow = function (root, val, depth) {
  if (depth == 1) {
    const node = {
      val: val,
      left: root,
      right: null,
    };
    return node;
  }
  const check = (node, dep) => {
    if (dep + 1 < depth) {
      if (node.left) check(node.left, dep + 1);
      if (node.right) check(node.right, dep + 1);
    } else {
      const node1 = {
        val: val,
        left: node.left || null,
        right: null,
      };
      node.left = node1;
      const node2 = {
        val: val,
        left: null,
        right: node.right || null,
      };
      node.right = node2;
    }
  };
  check(root, 1);
  return root;
};
