var spiralMatrix = function (m, n, head) {
  let matrix = Array.from({ length: m }, () => Array(n).fill(-1));
  let top = 0,
    bottom = m - 1,
    left = 0,
    right = n - 1;
  let current = head;

  while (current && top <= bottom && left <= right) {
    for (let i = left; i <= right && current; i++) {
      matrix[top][i] = current.val;
      current = current.next;
    }
    top++;

    for (let i = top; i <= bottom && current; i++) {
      matrix[i][right] = current.val;
      current = current.next;
    }
    right--;

    for (let i = right; i >= left && current; i--) {
      matrix[bottom][i] = current.val;
      current = current.next;
    }
    bottom--;

    for (let i = bottom; i >= top && current; i--) {
      matrix[i][left] = current.val;
      current = current.next;
    }
    left++;
  }

  return matrix;
};
