function lexicalOrder(n) {
  let result = [];

  function dfs(current) {
    if (current > n) return;
    result.push(current);
    for (let i = 0; i <= 9; i++) {
      if (current * 10 + i > n) return;
      dfs(current * 10 + i);
    }
  }

  for (let i = 1; i <= 9; i++) {
    dfs(i);
  }

  return result;
}
