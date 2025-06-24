var largestDivisibleSubset = function (nums) {
  let res = [];
  let mem = new Array(nums.length).fill(-1);

  function helper(index, curr, prev) {
    if (curr.length > res.length) {
      res = curr.slice();
    }

    for (let i = index; i < nums.length; i++) {
      if (curr.length > mem[i] && nums[i] % prev === 0) {
        mem[i] = curr.length;
        curr.push(nums[i]);
        helper(i + 1, curr, nums[i]);
        curr.pop();
      }
    }
  }
  nums.sort((a, b) => a - b);
  helper(0, [], 1);
  return res;
};
