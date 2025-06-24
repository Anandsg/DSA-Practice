function singleNumber(nums: number[]): number[] {
  let hash = new Map<number, number>();

  nums.forEach((num: number) => {
    if (hash.has(num)) hash.delete(num);
    else hash.set(num, 1);
  });

  const iter = hash.keys();

  let arr: number[] = [iter.next().value, iter.next().value];

  return arr;
}
