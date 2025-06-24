var countPairs = function (root, distance) {
  let result = 0;

  const getDistances = (node) => {
    const distances = Array(distance + 1).fill(0);

    if (!node) return distances;
    if (!node.left && !node.right) {
      distances[1] = 1;
      return distances;
    }
    const leftDistances = getDistances(node.left);
    const rightDistances = getDistances(node.right);

    for (let left = 1; left <= distance; left++) {
      for (let right = 1; right <= distance; right++) {
        if (left + right > distance) continue;
        result += leftDistances[left] * rightDistances[right];
      }
    }
    for (let index = 1; index <= distance; index++) {
      distances[index] = leftDistances[index - 1] + rightDistances[index - 1];
    }
    return distances;
  };

  getDistances(root);
  return result;
};
