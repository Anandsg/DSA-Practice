var findContentChildren = function (g, s) {
  const cookiesNums = s.length;
  if (cookiesNums === 0) return 0;
  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);

  let maxNum = 0;
  let cookieIndex = cookiesNums - 1;
  let childIndex = g.length - 1;
  while (cookieIndex >= 0 && childIndex >= 0) {
    if (s[cookieIndex] >= g[childIndex]) {
      maxNum++;
      cookieIndex--;
      childIndex--;
    } else {
      childIndex--;
    }
  }
  return maxNum;
};
