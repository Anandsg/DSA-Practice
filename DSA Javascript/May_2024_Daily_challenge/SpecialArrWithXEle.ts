function specialArray(nums: number[]): number {
  let i = 0;
  for (; i <= nums.length; i++) {
    if (i === nums.filter((e) => e >= i).length) {
      break;
    }
  }
  return i > nums.length ? -1 : i;
}
