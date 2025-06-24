var paintWalls = function (cost, time) {
    const n = cost.length;
    const dp = new Array(n + 1).fill(Number.MAX_SAFE_INTEGER);
    dp[0] = 0;
    for (let i = 0; i < n; ++i) {
        for (let j = n; j > 0; --j) {
            dp[j] = Math.min(dp[j], dp[Math.max(j - time[i] - 1, 0)] + cost[i]);
        }
    }
    return dp[n];
}