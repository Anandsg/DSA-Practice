var doubleIt = function (head) {
  let temp = head;
  let num = "";
  while (temp) {
    num = num + String(temp.val);
    temp = temp.next;
  }

  let newNum = String(BigInt(num) * BigInt(2));
  newNum = newNum.split("");
  let newVal = head;
  let last = null;
  let i = 0;
  while (newVal) {
    last = newVal;
    newVal.val = Number(newNum[i]);
    newVal = newVal.next;
    i++;
  }
  if (newNum.length > num.length) {
    let newNode = new ListNode();
    newNode.val = newNum[newNum.length - 1];
    newNode.next = null;
    last.next = newNode;
  }

  return head;
};
