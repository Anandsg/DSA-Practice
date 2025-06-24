function maxFrequencyElements(nums) {
  const ob = nums.reduce((pre, cur) => {
    pre[cur] = pre[cur] + 1 || 1;
    return { ...pre };
  }, {});
  const values = Object.values(ob);
  const max = Math.max(...values);
  let ans = 0;
  values.forEach((el) => (ans += el === max ? el : 0));
  return ans;
}
