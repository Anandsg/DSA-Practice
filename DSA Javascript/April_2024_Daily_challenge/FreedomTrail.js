/**
 * @param {string} ring
 * @param {string} key
 * @return {number}
 */
var findRotateSteps = function (ring, key) {
  const l = ring.length;
  const dp = Array.from({ length: l }, () => Array(key.length).fill(-1));

  const turn = (keyInd, ind, dir) => {
    let dist = 0;
    while (ring[ind] !== key[keyInd]) {
      dist++;
      ind += dir;
      if (dir < 0 && ind < 0) ind += l;
      if (dir > 0 && ind == l) ind -= l;
    }

    return [dist, ind];
  };

  const fS = (ind, keyInd) => {
    if (keyInd === key.length) return 0;
    if (dp[ind][keyInd] !== -1) return dp[ind][keyInd];

    let i;
    let right;
    let left;

    [right, i] = turn(keyInd, ind, 1);
    right += fS(i, keyInd + 1);

    [left, i] = turn(keyInd, ind, -1);
    left += fS(i, keyInd + 1);

    dp[ind][keyInd] = Math.min(left, right) + 1;
    return dp[ind][keyInd];
  };

  return fS(0, 0);
};
