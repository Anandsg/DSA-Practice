var xorQueries = function (arr, queries) {
  const n = arr.length;
  const xorPrefix = [0];
  for (let i = 0; i < n; i++) {
    xorPrefix[i + 1] = xorPrefix[i] ^ arr[i];
  }

  const result = [];
  for (const query of queries) {
    const left = query[0],
      right = query[1];
    result.push(xorPrefix[right + 1] ^ xorPrefix[left]);
  }

  return result;
};
