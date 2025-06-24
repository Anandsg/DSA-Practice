var makeGood = function (s) {
  if (s.length <= 1) return s;
  let cleaner = function (str) {
    let flag = 0;
    let res = "";
    for (var i = 0; i < str.length - 1; i++) {
      if (Math.abs(str.charCodeAt(i) - str.charCodeAt(i + 1)) != 32) {
        res += s[i];
      } else {
        i++;
        flag = 1;
      }
    }
    if (i < s.length) res += s[s.length - 1];
    s = res;
    if (flag == 1) {
      cleaner(s);
    }
  };
  cleaner(s);
  return s;
};
