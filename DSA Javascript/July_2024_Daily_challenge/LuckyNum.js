var luckyNumbers = function (matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;
  const rowMins = new Array(rows);
  const colMaxs = new Array(cols);

  for (let i = 0; i < rows; i++) {
    let rowMin = Infinity;

    for (let j = 0; j < cols; j++) {
      const num = matrix[i][j];
      rowMin = Math.min(rowMin, num);

      const currColMax = colMaxs[j] || -1;
      colMaxs[j] = Math.max(num, currColMax);
    }

    rowMins[i] = rowMin;
  }

  const result = [];

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      const num = matrix[i][j];

      if (num == rowMins[i] && num == colMaxs[j]) {
        result.push(num);
      }
    }
  }

  return result;
};
