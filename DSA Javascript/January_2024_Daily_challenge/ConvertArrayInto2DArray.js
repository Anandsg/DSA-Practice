var findMatrix = function (v) {
  let um = new Map();
  for (let i of v) {
    um.set(i, (um.get(i) || 0) + 1);
  }

  let ans = [];
  while (um.size > 0) {
    let temp = [];
    let toErase = [];
    for (let [f, s] of um) {
      temp.push(f);
      s--;
      if (s === 0) {
        toErase.push(f);
      }
      um.set(f, s);
    }
    ans.push(temp);
    for (let i of toErase) {
      um.delete(i);
    }
  }
  return ans;
};
