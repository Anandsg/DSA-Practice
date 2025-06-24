function minKBitFlips(nums: number[], k: number): number {
  const n = nums.length;
  const isFlipped = new Array(n).fill(0);
  let flips = 0;
  let flipCount = 0;

  for (let i = 0; i < n; i++) {
    if (i >= k) {
      flipCount ^= isFlipped[i - k];
    }

    if ((nums[i] ^ flipCount) === 0) {
      if (i + k > n) return -1;
      flips++;
      flipCount ^= 1;
      isFlipped[i] = 1;
    }
  }

  return flips;
}
