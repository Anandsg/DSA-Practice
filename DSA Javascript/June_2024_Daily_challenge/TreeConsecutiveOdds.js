var threeConsecutiveOdds = function (arr) {
  const n = arr.length;
  let count = 0;

  for (let i = 0, j = 0; j < n; j++) {
    if (arr[j] % 2) {
      count++;

      if (count === 3) return true;
    } else {
      count = 0;
      i = j;
    }
  }

  return false;
};
