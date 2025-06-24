var numWays = function (numSteps, arrayLength) {
    // Define a modulus value for taking the modulo operation to avoid overflow.
    const mod = 1000000007;

    // Calculate the maximum position the pointer can reach, which is the minimum of numSteps/2 and arrayLength - 1.
    const maxPosition = Math.min(Math.floor(numSteps / 2), arrayLength - 1);

    // Create a 2D array dp to store the number of ways to reach a specific position at each step.
    const dp = new Array(numSteps + 1).fill().map(() => new Array(maxPosition + 1).fill(0));

    // Initialize the number of ways to stay at position 0 after 0 steps to 1.
    dp[0][0] = 1;

    // Loop through the number of steps.
    for (let i = 1; i <= numSteps; i++) {
        for (let j = 0; j <= maxPosition; j++) {
            // Initialize the number of ways to stay at the current position with the number of ways to stay at the same position in the previous step.
            dp[i][j] = dp[i - 1][j];

            // If the current position is greater than 0, add the number of ways to reach it by moving left.
            if (j > 0) {
                dp[i][j] = (dp[i][j] + dp[i - 1][j - 1]) % mod;
            }

            // If the current position is less than the maximum position, add the number of ways to reach it by moving right.
            if (j < maxPosition) {
                dp[i][j] = (dp[i][j] + dp[i - 1][j + 1]) % mod;
            }
        }
    }
    return dp[numSteps][0];
};
