var maximumGain = function (s, x, y) {
  let aCount = 0;
  let bCount = 0;
  let lesser = Math.min(x, y);
  let result = 0;

  for (let i = 0; i < s.length; i++) {
    let c = s.charAt(i);
    if (c > "b") {
      result += Math.min(aCount, bCount) * lesser;
      aCount = 0;
      bCount = 0;
    } else if (c === "a") {
      if (x < y && bCount > 0) {
        bCount--;
        result += y;
      } else {
        aCount++;
      }
    } else if (c === "b") {
      if (x > y && aCount > 0) {
        aCount--;
        result += x;
      } else {
        bCount++;
      }
    }
  }

  result += Math.min(aCount, bCount) * lesser;
  return result;
};
