var maxDistance = function (arrays) {
  let maxDistance = Number.MIN_SAFE_INTEGER;
  let min = arrays[0][0];
  let max = arrays[0].pop();

  for (let i = 1; i < arrays.length; i++) {
    let currentMin = arrays[i][0];
    let currentMax = arrays[i].pop();
    maxDistance = Math.max(max - currentMin, maxDistance);
    maxDistance = Math.max(currentMax - min, maxDistance);

    min = Math.min(min, currentMin);
    max = Math.max(max, currentMax);
  }

  return maxDistance;
};
