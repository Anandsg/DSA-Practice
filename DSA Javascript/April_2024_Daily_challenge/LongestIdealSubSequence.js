var longestIdealString = function (s, k) {
  const n = s.length;
  const nums = [...s].map((el) => el.charCodeAt(0) - 97);
  const dp = new Array(26).fill(0); // longest seq length ending with char i
  for (const a of nums) {
    let cur = 0;
    for (let b = 0; b < 26; b++) {
      if (Math.abs(a - b) <= k) {
        cur = Math.max(dp[b], cur);
      }
    }
    cur++;
    dp[a] = Math.max(cur, dp[a]);
  }
  return Math.max(...dp);
};
