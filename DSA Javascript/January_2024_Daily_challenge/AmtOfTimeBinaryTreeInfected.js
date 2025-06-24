var amountOfTime = function (root, start) {
  let maxTime = 0;
  function dfs(root) {
    let left = 0,
      right = 0;
    if (root.val == start) {
      if (root.left !== null) left = dfs(root.left) + 1;
      if (root.right !== null) right = dfs(root.right) + 1;
      maxTime = Math.max(maxTime, left, right);
      return -1;
    }
    if (root.left !== null) left = dfs(root.left);
    if (root.right !== null) right = dfs(root.right);
    if (left < 0) {
      if (root.right !== null) right++;
      maxTime = Math.max(maxTime, right - left);
      return --left;
    }
    if (right < 0) {
      if (root.left !== null) left++;
      maxTime = Math.max(maxTime, left - right);
      return --right;
    }
    if (root.left !== null) left++;
    if (root.right !== null) right++;
    return Math.max(left, right);
  }
  dfs(root);
  return maxTime;
};
