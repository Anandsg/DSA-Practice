var minOperations = function (logs) {
  let count = 0;
  for (let l of logs) {
    if (l === "./") continue;
    if (l === "../") {
      if (count > 0) count--;
    } else count++;
  }
  return count;
};
