var removeNthFromEnd = function (head, n) {
  const dummy = new ListNode(0);
  dummy.next = head;
  let first = dummy;
  let second = dummy;

  for (let i = 0; i <= n; i++) {
    first = first.next;
  }

  while (first !== null) {
    first = first.next;
    second = second.next;
  }

  second.next = second.next.next;

  return dummy.next;
};
