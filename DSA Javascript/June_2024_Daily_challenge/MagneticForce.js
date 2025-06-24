/**
 * @param {number[]} position
 * @param {number} m
 * @return {number}
 */
var maxDistance = function (position, m) {
  const sorted = new Uint32Array(position).sort();
  let left = 0,
    right = Math.floor((sorted.slice(-1) - sorted[0]) / (m - 1)),
    ans = 0;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    let segments = 1;
    for (let i = 1, last = sorted[0]; i < sorted.length && segments < m; i++) {
      if (sorted[i] - last >= mid) {
        segments++;
        last = sorted[i];
      }
    }

    if (segments === m) {
      ans = mid;
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return ans;
};
