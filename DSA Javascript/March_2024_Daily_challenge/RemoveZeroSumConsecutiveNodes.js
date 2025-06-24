const removeZeroSumSublists = (head) => {
  const dummy = { next: head };
  const sum = new Int16Array(1001);
  const nodes = [dummy];
  let changed = false;
  let cur = head;
  let idx = 1;
  let sumStart = 1;
  while (cur) {
    for (let i = sumStart; i <= idx; ++i) {
      sum[i] += cur.val;
      if (sum[i] === 0) {
        sumStart = i + 1;
        nodes[i - 1].next = cur.next;
        changed = true;
      }
    }
    nodes[idx++] = cur;
    cur = cur.next;
  }
  return changed ? removeZeroSumSublists(dummy.next) : dummy.next;
};
