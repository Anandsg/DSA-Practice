var mergeNodes = function (head) {
  const ansHead = new ListNode();
  let curHead = ansHead;
  head = head.next;
  while (head) {
    if (head.val !== 0) {
      curHead.val += head.val;
    } else if (head.next !== null) {
      curHead.next = new ListNode();
      curHead = curHead.next;
    }
    head = head.next;
  }
  return ansHead;
};
