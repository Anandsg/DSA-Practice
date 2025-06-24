function kthDistinct(arr, k) {
  const map = new Map();

  for (const str of arr) {
    map.set(str, (map.get(str) | 0) + 1);
  }

  for (const str of arr) {
    if (map.get(str) === 1) k--;
    if (k === 0) return str;
  }

  return "";
}
