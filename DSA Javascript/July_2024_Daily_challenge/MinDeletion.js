var minimumDeletions = function (s) {
  let a = (b = 0);

  for (const char of s) {
    char === "a" ? (b = Math.min(a, b + 1)) : (a += 1);
  }
  return Math.min(a, b);
};
