function canSortArray(nums) {
  nums.sort((a, b) => {
    const cnt1 = a.toString(2).split("1").length;
    const cnt2 = b.toString(2).split("1").length;
    return cnt1 === cnt2 && a - b;
  });

  return nums.every((val, i, arr) => i === 0 || arr[i - 1] <= val);
}
