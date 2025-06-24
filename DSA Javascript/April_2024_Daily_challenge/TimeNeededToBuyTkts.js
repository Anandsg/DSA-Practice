var timeRequiredToBuy = function (t, k) {
  let s = 0,
    i = 0;
  while (t[k] !== 0) {
    if (t[i] > 0) {
      s++;
      t[i]--;
      if (t[k] == 0) return s;
    }
    if (i == t.length - 1) i = 0;
    else i++;
  }
};
