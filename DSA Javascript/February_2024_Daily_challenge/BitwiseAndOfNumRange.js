var rangeBitwiseAnd = function (left, right) {
  let cnt = 0;
  while (left !== right) {
    left >>= 1;
    right >>= 1;
    cnt++;
  }
  return left << cnt;
};
