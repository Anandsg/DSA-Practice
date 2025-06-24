function gcd(a, b) {
  while (b !== 0) {
    [a, b] = [b, a % b];
  }
  return a;
}

function insertGreatestCommonDivisors(head) {
  let current = head;
  while (current && current.next) {
    let newNode = {
      val: gcd(current.val, current.next.val),
      next: current.next,
    };
    current.next = newNode;
    current = newNode.next;
  }
  return head;
}
