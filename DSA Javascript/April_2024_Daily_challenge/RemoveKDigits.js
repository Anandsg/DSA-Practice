var removeKdigits = function (num, k) {
  if (num.length <= k) {
    return "0";
  }

  let result = num;
  let count = k;
  let i = 0;

  while (i < result.length) {
    if (count <= 0) {
      break;
    }

    const cur = result[i];
    const next = result[i + 1];

    if (cur > next) {
      result = result.slice(0, i) + result.slice(i + 1);
      count -= 1;
      i -= 1;
    } else {
      i += 1;
    }
  }

  if (count > 0) {
    result = result.slice(0, -count);
  }

  return result.replace(/^0+/, "") || "0";
};
