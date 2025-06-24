function countTriplets(arr: number[]): number {
  let res = 0;
  const n = arr.length;
  let xor = 0;
  const map = {};
  map[0] = [-1];
  for (let i = 0; i < n; i++) {
    xor ^= arr[i];
    if (map[xor]) {
      for (const a of map[xor]) {
        res += i - a - 1;
      }
      map[xor].push(i);
    } else {
      map[xor] = [i];
    }
  }

  return res;
}


