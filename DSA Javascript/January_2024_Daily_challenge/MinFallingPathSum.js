var minFallingPathSum = function (matrix) {
  let row = matrix.length;
  let memo = {};

  var treverse = (i, j) => {
    if (i <= -1 || i >= row || j <= -1 || j >= row) {
      return Number.MAX_SAFE_INTEGER;
    }

    let key = `${i}-${j}`;
    if (key in memo) return memo[key];

    if (i + 1 === row) {
      memo[key] = matrix[i][j];
      return memo[key];
    }

    memo[key] =
      matrix[i][j] +
      Math.min(
        treverse(i + 1, j - 1),
        treverse(i + 1, j),
        treverse(i + 1, j + 1)
      );

    return memo[key];
  };

  let output = Number.MAX_SAFE_INTEGER;

  for (let i = 0; i < row; i++) {
    output = Math.min(output, treverse(0, i));
  }

  return output;
};
