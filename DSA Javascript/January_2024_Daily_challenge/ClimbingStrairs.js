/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  let prv1 = 1;
  let prv2 = 1;
  for (let i = 0; i < n; i++) {
    let temp = prv1;
    prv1 = prv1 + prv2;
    prv2 = temp;
  }

  return prv2;
};
