var kthLargestLevelSum = function (root, k) {
  let levelSums = [];
  let queue = [root];

  while (queue.length) {
    let levelSum = 0;
    let levelSize = queue.length;

    for (let i = 0; i < levelSize; i++) {
      let node = queue.shift();
      levelSum += node.val;
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    levelSums.push(levelSum);
  }

  levelSums.sort((a, b) => b - a);
  return levelSums.length >= k ? levelSums[k - 1] : -1;
};
