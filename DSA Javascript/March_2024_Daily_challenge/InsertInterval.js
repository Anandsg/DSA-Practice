var insert = function (intervals, newInterval) {
  const n = intervals.length;
  let ans = [];
  for (let interval of intervals)
    if (interval[1] < newInterval[0]) ans.push(interval);
    else break;
  let i = ans.length;
  if (i < n) {
    let l = Math.min(intervals[i][0], newInterval[0]);
    let r = newInterval[1];
    while (i < n && intervals[i][0] <= newInterval[1]) {
      r = Math.max(r, intervals[i][1]);
      i++;
    }
    ans.push([l, r]);
    ans = ans.concat(intervals.slice(i));
  } else ans.push(newInterval);
  return ans;
};
