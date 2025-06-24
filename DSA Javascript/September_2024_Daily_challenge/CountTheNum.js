var countConsistentStrings = function (allowed, words) {
  let map = {};
  for (let i of allowed) {
    map[i] = (map[i] || 0) + 1;
  }

  let ans = words.length;

  for (let i of words) {
    let flag = 0;

    for (let j of i) {
      if (!map[j]) {
        flag = 1;
        ans -= 1;
      }

      if (flag) {
        break;
      }
    }
  }

  return ans;
};
