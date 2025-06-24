var findMaxLength = function (nums) {
  let mp = new Map([[0, -1]]);
  let sum = 0,
    ans = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i]) sum++;
    else sum--;
    if (mp.has(sum)) ans = Math.max(ans, i - mp.get(sum));
    else mp.set(sum, i);
  }
  return ans;
};
