var reorderList = function (head) {
  let slow = head,
    fast = head.next;
  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }
  let secondList = slow.next,
    prev = null;
  slow.next = null;
  while (secondList !== null) {
    let temp = secondList.next;
    secondList.next = prev;
    prev = secondList;
    secondList = temp;
  }
  let firstList = head;
  secondList = prev;
  while (secondList !== null) {
    let temp1 = firstList.next,
      temp2 = secondList.next;
    firstList.next = secondList;
    secondList.next = temp1;
    firstList = temp1;
    secondList = temp2;
  }
};
