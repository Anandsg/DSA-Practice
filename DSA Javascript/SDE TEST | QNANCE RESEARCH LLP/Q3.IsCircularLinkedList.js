function isCircularLinkedList(head) {
  const visited = new Set();
  let current = head;
  while (current) {
    if (visited.has(current)) {
      return true;
    }
    visited.add(current);
    current = current.next;
  }
  return false;
}
