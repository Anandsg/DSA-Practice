function numSteps(s: string): number {
  const bNum: string[] = s.split("");
  let carry = false;
  let count = 0;
  while (bNum.length > 1 && !carry) {
    count++;
    if (bNum.pop() === "1") carry = true;
  }
  if (carry)
    count += bNum.reduce((acc, v) => (v === "0" ? acc + 2 : acc + 1), 1);
  return count;
}
