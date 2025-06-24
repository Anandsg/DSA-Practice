var minSteps = function (s, t) {
  let smp = new Map();
  let tmp = new Map();
  let cnt = 0;

  for (let a of s) {
    smp.set(a, (smp.get(a) || 0) + 1);
  }

  for (let a of t) {
    tmp.set(a, (tmp.get(a) || 0) + 1);
  }

  for (let [key, value] of smp) {
    if (tmp.has(key)) {
      if (value === tmp.get(key)) {
        cnt += value;
      } else {
        cnt += Math.min(value, tmp.get(key));
      }
    }
  }

  return s.length - cnt;
};
