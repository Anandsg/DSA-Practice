var minDifficulty = function (jobDifficulty, d) {
  if (jobDifficulty.length < d) {
    return -1;
  }
  const totalSum = jobDifficulty.reduce((acc, val) => acc + val, 0);
  if (totalSum === 0) {
    return 0;
  }
  const memo = Array.from({ length: d + 1 }, () =>
    Array(jobDifficulty.length).fill(0)
  );
  helper(jobDifficulty, d, 0, memo);

  return memo[d][0];
};

function helper(jd, daysLeft, idx, memo) {
  const length = jd.length;
  if (memo[daysLeft][idx] !== 0) {
    return;
  }
  if (daysLeft === 1) {
    const num = Math.max(...jd.slice(idx));
    memo[daysLeft][idx] = num;
    return;
  }
  let maxDifficulty = jd[idx];
  daysLeft--;
  const stop = length - idx - daysLeft + 1;

  let res = Infinity;
  for (let i = 1; i < stop; i++) {
    maxDifficulty = Math.max(maxDifficulty, jd[idx + i - 1]);
    let other = memo[daysLeft][idx + i];
    if (other === 0) {
      helper(jd, daysLeft, idx + i, memo);
      other = memo[daysLeft][idx + i];
    }
    res = Math.min(res, other + maxDifficulty);
  }
  memo[daysLeft + 1][idx] = res;
}
