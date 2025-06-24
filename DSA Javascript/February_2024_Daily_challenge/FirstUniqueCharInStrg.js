var firstUniqChar = function (s) {
  let M = new Map();

  for (let i = 0; i < s.length; i++) {
    M.set(s[i], (M.get(s[i]) || 0) + 1);
  }

  for (let i = 0; i < s.length; i++) {
    if (M.get(s[i]) === 1) {
      return i;
    }
  }

  return -1;
};
