var spiralMatrixIII = function (rows, cols, rStart, cStart) {
  // Directions: right, down, left, up
  const directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];
  let result = [[rStart, cStart]]; // Start with the initial point
  let steps = 1; // Steps for each direction change
  let dir = 0; // Start with moving right
  let r = rStart;
  let c = cStart;

  while (result.length < rows * cols) {
    // Move in the current direction
    for (let i = 0; i < steps; i++) {
      r += directions[dir][0];
      c += directions[dir][1];

      // Check if the new position is within bounds
      if (r >= 0 && r < rows && c >= 0 && c < cols) {
        result.push([r, c]);
      }
    }

    // Change direction
    dir = (dir + 1) % 4;

    // Increase steps every two directions
    if (dir % 2 === 0) {
      steps++;
    }
  }

  return result;
};
