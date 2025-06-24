function minHeightShelves(books, shelfWidth) {
  const n = books.length;
  const dp = new Array(n + 1).fill(Infinity);
  dp[0] = 0;

  for (let i = 1; i <= n; i++) {
    let maxWidth = shelfWidth;
    let maxHeight = 0;
    for (let j = i - 1; j >= 0; j--) {
      maxWidth -= books[j][0]; // Accumulate the width
      if (maxWidth < 0) break; // Exceed shelf width

      maxHeight = Math.max(maxHeight, books[j][1]); // Maximum height of current level
      dp[i] = Math.min(dp[i], dp[j] + maxHeight); // Update the minimum height
    }
  }

  return dp[n];
}
