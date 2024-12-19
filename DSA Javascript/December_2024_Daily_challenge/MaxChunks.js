var maxChunksToSorted = function (arr) {
  let max = 0,
    chunks = 0;
  for (let i = 0; i < arr.length; i++) {
    max = Math.max(max, arr[i]);
    if (max === i) chunks++;
  }
  return chunks;
};
