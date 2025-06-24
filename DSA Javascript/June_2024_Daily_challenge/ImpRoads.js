var maximumImportance = function (n, roads) {
  let arr = new Array(n).fill(0);
  for (let i = 0; i < roads.length; i++) {
    let a = roads[i][0];
    let b = roads[i][1];
    arr[a]++;
    arr[b]++;
  }

  arr = arr.sort((a, b) => b - a);
  let maxsum = 0;
  let ind = 0;

  for (let i = n; i > 0; i--) {
    console.log(arr[ind]);
    maxsum = maxsum + i * arr[ind];
    ind++;
  }
  return maxsum;
};
