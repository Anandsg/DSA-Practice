var modifiedList = function (nums, head) {
  let dummy = new ListNode(0);
  dummy.next = head;
  let current = dummy;
  let numSet = new Set(nums);

  while (current && current.next) {
    if (numSet.has(current.next.val)) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }

  return dummy.next;
};
