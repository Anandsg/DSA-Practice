var hasCycle = function (head) {
  let rabbit = head,
    tortoise = head;
  while (rabbit && rabbit.next) {
    rabbit = rabbit.next.next;
    tortoise = tortoise.next;
    if (rabbit === tortoise) {
      return true;
    }
  }
  return false;
};
