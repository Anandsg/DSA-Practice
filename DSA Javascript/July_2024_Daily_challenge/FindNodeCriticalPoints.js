var nodesBetweenCriticalPoints = function (head) {
  let first,
    prev,
    i = 1,
    min = Infinity,
    max = -1;
  while (head.next != null && head.next.next != null) {
    if (
      (head.next.val > head.val && head.next.val > head.next.next.val) ||
      (head.next.val < head.val && head.next.val < head.next.next.val)
    ) {
      if (!first) {
        first = i;
      } else {
        min = Math.min(min, i - prev);
        max = i - first;
      }

      prev = i;
    }
    i++;
    head = head.next;
  }

  if (max == -1) return [-1, -1];
  return [min, max];
};
