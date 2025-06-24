var maxDepth = function (s) {
  let count = 0;
  let maxCount = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      count += 1;
    } else if (s[i] === ")") {
      count -= 1;
    }
    maxCount = Math.max(count, maxCount);
  }
  return maxCount;
};
