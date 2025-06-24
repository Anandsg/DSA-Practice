var maximalRectangle = function (matrix) {
  if (!matrix.length || !matrix[0].length) return 0;

  let n = matrix[0].length,
    height = new Array(n + 1).fill(0),
    maxArea = 0;

  for (let row of matrix) {
    for (let i = 0; i < n; i++) {
      height[i] = row[i] === "1" ? height[i] + 1 : 0;
    }

    let stack = [-1];
    for (let i = 0; i < n + 1; i++) {
      while (height[i] < height[stack[stack.length - 1]]) {
        let h = height[stack.pop()],
          w = i - stack[stack.length - 1] - 1;
        maxArea = Math.max(maxArea, h * w);
      }
      stack.push(i);
    }
  }
  return maxArea;
};
