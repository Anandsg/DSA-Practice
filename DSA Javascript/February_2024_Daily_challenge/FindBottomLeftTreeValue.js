var findBottomLeftValue = function (root) {
  let res = 0,
    maxDep = -1,
    curDep = 0;
  DFS(root);
  return res;
  function DFS(node) {
    if (!node.left && !node.right) {
      if (curDep > maxDep) {
        res = node.val;
        maxDep = curDep;
      }
    }
    if (node.left) {
      curDep++;
      DFS(node.left);
      curDep--;
    }
    if (node.right) {
      curDep++;
      DFS(node.right);
      curDep--;
    }
  }
};
