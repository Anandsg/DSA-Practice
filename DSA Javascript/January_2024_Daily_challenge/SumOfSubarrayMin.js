/**
 * @param {number[]} arr
 * @return {number}
 */
var sumSubarrayMins = function (arr) {
  const MOD = 1e9 + 7;
  const n = arr.length;
  const stack = [];
  let result = 0;
  for (let i = 0; i <= n; i++) {
    while (
      stack.length &&
      (i === n || arr[stack[stack.length - 1]] >= arr[i])
    ) {
      const mid = stack.pop();
      const leftBoundary = stack.length ? stack[stack.length - 1] : -1;
      const rightBoundary = i;

      const count = ((mid - leftBoundary) * (rightBoundary - mid)) % MOD;
      result += (count * arr[mid]) % MOD;
      result %= MOD;
    }
    stack.push(i);
  }
  return result;
};
