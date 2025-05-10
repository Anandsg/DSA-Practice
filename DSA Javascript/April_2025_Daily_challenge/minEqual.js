var minSum = function (a1, a2) {
  let sum1 = a1.reduce((sum, e) => sum + e, 0);
  let sum2 = a2.reduce((sum, e) => sum + e, 0);
  let zeroCount1 = a1.reduce((sum, e) => sum + (e === 0), 0);
  let zeroCount2 = a2.reduce((sum, e) => sum + (e === 0), 0);

  // handle -ve case
  if (zeroCount1 && zeroCount2) {
    // skip
  } else if (zeroCount1) {
    if (sum1 + zeroCount1 > sum2) {
      return -1; // impossible
    }
  } else if (zeroCount2) {
    if (sum2 + zeroCount2 > sum1) {
      return -1; // impossible
    }
  } else {
    if (sum1 !== sum2) {
      return -1; // impossible
    }
  }

  // handle +ve case
  return Math.max(sum1 + zeroCount1, sum2 + zeroCount2);
};
