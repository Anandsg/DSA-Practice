var canBeEqual = function (target, arr) {
  let n = arr.length;
  const countMap = new Map();
  for (const x of target) {
    countMap.set(x, (countMap.get(x) || 0) + 1);
  }
  for (const x of arr) {
    countMap.set(x, (countMap.get(x) || 0) - 1);
  }
  for (const [a, b] of countMap) {
    if (b !== 0) return false;
  }
  return true;
};
