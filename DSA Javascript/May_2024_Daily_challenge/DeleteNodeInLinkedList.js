var deleteNode = function (node) {
  // copy next node's val into current node
  // delete next node

  node.val = node.next.val;
  node.next = node.next.next;
};
