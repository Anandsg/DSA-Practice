const findMinArrowShots = function (points) {
  points.sort((a, b) => a[0] - b[0]);
  let counter = 0,
    end = null;

  for (let [x, y] of points) {
    if (end == null || end < x) {
      counter++;
      end = y;
    } else {
      end = Math.min(end, y);
    }
  }
  return counter;
};
