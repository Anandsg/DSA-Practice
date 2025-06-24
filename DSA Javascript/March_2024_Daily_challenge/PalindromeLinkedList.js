var isPalindrome = function (head) {
  if (!head || !head.next) return true;

  let slow = head;
  let fast = head;
  let prev = null;

  // Find the middle of the linked list and reverse the first half
  while (fast && fast.next) {
    fast = fast.next.next;
    let temp = slow.next;
    slow.next = prev;
    prev = slow;
    slow = temp;
  }

  if (fast) slow = slow.next;

  while (prev && slow) {
    if (prev.val !== slow.val) return false;
    prev = prev.next;
    slow = slow.next;
  }

  return true;
};
