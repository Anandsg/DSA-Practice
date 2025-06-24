var subarraysWithKDistinct = function (nums, k) {
  const atmost = (k) => {
    const n = nums.length;
    let f = Array(n + 1).fill(0);
    let len_arr = (ans = i = j = 0);
    while (i < n) {
      while (i < n && len_arr <= k) {
        if (len_arr == k && f[nums[i]] == 0) break;
        f[nums[i]] += 1;
        if (f[nums[i]] == 1) len_arr += 1;
        i += 1;
        ans += i - j;
      }
      while (j < i && len_arr == k) {
        f[nums[j]] -= 1;
        if (f[nums[j]] == 0) len_arr -= 1;
        j += 1;
      }
    }
    return ans;
  };
  return atmost(k) - (k > 1 ? atmost(k - 1) : 0);
};
