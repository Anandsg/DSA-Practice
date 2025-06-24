var frequencySort = function (nums) {
  const hash = nums.reduce((map, num) => {
    map[num] = map[num] || 0;
    map[num] += 1;
    return map;
  }, {});
  return nums.sort((a, b) => hash[a] - hash[b] || b - a);
};
