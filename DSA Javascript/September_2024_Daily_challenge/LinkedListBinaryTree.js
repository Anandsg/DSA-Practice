var isSubPath = function (head, root) {
  if (!root) return false;
  return (
    dfs(root, head) || isSubPath(head, root.left) || isSubPath(head, root.right)
  );
};

function dfs(node, listNode) {
  if (!listNode) return true;
  if (!node) return false;
  if (node.val !== listNode.val) return false;
  return dfs(node.left, listNode.next) || dfs(node.right, listNode.next);
}
