var removeNodes = function (head) {
  let list = null;
  while (head) {
    let nextNode = head.next;
    head.next = list;
    list = head;
    head = nextNode;
  }
  let list2 = new ListNode(list.val);
  let rightMax = list.val;
  list = list.next;
  while (list) {
    if (rightMax <= list.val) {
      rightMax = list.val;
      let node = new ListNode(list.val);
      node.next = list2;
      list2 = node;
    }
    list = list.next;
  }
  return list2;
};
