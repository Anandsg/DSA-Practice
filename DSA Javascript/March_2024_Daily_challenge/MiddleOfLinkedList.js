const middleNode = function (head) {
  let curr = head;
  let count = 0;
  while (curr) {
    count++;
    curr = curr.next;
  }
  let mid = Math.floor(count / 2);
  curr = head;
  for (let i = 0; i < mid; i++) {
    curr = curr.next;
  }
  return curr;
};
