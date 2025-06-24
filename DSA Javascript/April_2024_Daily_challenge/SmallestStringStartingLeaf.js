var smallestFromLeaf = function (root) {
  let result = null;
  const dfs = (node, acc) => {
    let nodeValue = String.fromCharCode(node.val + 97) + acc;
    if (!node.left && !node.right) {
      if (result == null || nodeValue < result) result = nodeValue;
      return;
    }
    node.left && dfs(node.left, nodeValue);
    node.right && dfs(node.right, nodeValue);
  };
  dfs(root, "");
  return result;
};
