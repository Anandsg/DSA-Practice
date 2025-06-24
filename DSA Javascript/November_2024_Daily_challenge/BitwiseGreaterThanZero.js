var largestCombination = function (candidates) {
  let maxCount = 0;
  for (let bit = 0; bit < 24; bit++) {
    let count = 0;
    for (let num of candidates) {
      if (num & (1 << bit)) {
        count++;
      }
    }
    maxCount = Math.max(maxCount, count);
  }
  return maxCount;
};
