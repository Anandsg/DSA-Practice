var countGoodStrings = function (low, high, zero, one) {
  const MOD = 1e9 + 7;
  let dp = new Array(high + 1).fill(0);
  dp[0] = 1;

  for (let length = 1; length <= high; length++) {
    if (length >= zero) {
      dp[length] += dp[length - zero];
      dp[length] %= MOD;
    }
    if (length >= one) {
      dp[length] += dp[length - one];
      dp[length] %= MOD;
    }
  }

  let result = 0;
  for (let length = low; length <= high; length++) {
    result += dp[length];
    result %= MOD;
  }

  return result;
};
