var mergeInBetween = function (list1, a, b, list2) {
  let temp;
  let count = 0;
  let ptr1 = list1,
    ptr2 = list2;

  while (ptr1 && ptr2) {
    if (count === a - 1) {
      temp = ptr1.next;
      ptr1.next = ptr2;
      ptr1 = temp;

      while (ptr2.next) ptr2 = ptr2.next;
    }

    if (count === b) {
      ptr2.next = ptr1;
      break;
    }

    ++count;
    ptr1 = ptr1.next;
  }

  return list1;
};
