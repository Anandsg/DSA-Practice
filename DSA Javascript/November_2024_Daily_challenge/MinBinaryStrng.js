var minChanges = function (s) {
  let min = 0;
  let size = s.length;
  let stack = [];
  const chunk = s.match(/.{1,2}/g);
  for (let i = 0; i < chunk.length; i++) {
    let [left, right] = chunk[i];
    if (left !== right) {
      min += 1;
    }
  }

  return min;
};
