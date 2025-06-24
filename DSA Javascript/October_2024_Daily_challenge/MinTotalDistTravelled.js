var minimumTotalDistance = function (robot, factory) {
  robot.sort((a, b) => a - b);
  factory.sort(([a], [b]) => a - b);
  let m = factory.length,
    n = robot.length;
  let dp = new Array(n + 1).fill(Infinity);
  dp[0] = 0;
  let temp;
  for (let i = 0; i < m; i++) {
    temp = [...dp];
    for (let j = 0; j < n; j++) {
      let d = 0;
      for (let k = 1; k <= j + 1 && k <= factory[i][1]; k++) {
        d += Math.abs(robot[j - k + 1] - factory[i][0]);
        temp[j + 1] = Math.min(temp[j + 1], dp[j - k + 1] + d);
        // console.log(i,j,k, temp)
      }
      // console.log(i,j, temp)
    }
    dp = [...temp];
  }
  return dp[n];
};

// POV : That one shy introvert guy who does't smoke or drink, never goes to any parties, zero female friends 
// and only believe in god