var champagneTower = function (poured, query_row, query_glass) {
    const dp = new Array(query_row + 2).fill(0); // One extra row for simplicity

    dp[0] = poured;

    for (let row = 1; row <= query_row; row++) {
        for (let glass = row; glass >= 0; glass--) {
            dp[glass + 1] += dp[glass] = Math.max(0, (dp[glass] - 1) / 2);
        }
    }

    return Math.min(1, dp[query_glass]);
};