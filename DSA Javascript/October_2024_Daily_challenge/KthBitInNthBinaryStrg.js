function findKthBit(n, k) {
  if (n === 1) return "0";

  const length = (1 << n) - 1;
  const mid = length >> 1;

  if (k === mid + 1) return "1";
  if (k <= mid) return findKthBit(n - 1, k);

  return findKthBit(n - 1, length - k + 1) === "0" ? "1" : "0";
}
