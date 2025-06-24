/**
 * @param {number[]} commands
 * @param {number[][]} obstacles
 * @return {number}
 */
var robotSim = function (commands, obstacles) {
  const directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ]; // North, East, South, West
  let x = 0,
    y = 0; // Initial position
  let directionIndex = 0; // Start facing North
  let maxDistance = 0;

  const obstacleSet = new Set();
  for (let obstacle of obstacles) {
    obstacleSet.add(obstacle.join(","));
  }

  for (let command of commands) {
    if (command === -2) {
      // Turn left 90 degrees
      directionIndex = (directionIndex + 3) % 4; // (current_index + 3) % 4 gives left turn
    } else if (command === -1) {
      // Turn right 90 degrees
      directionIndex = (directionIndex + 1) % 4; // (current_index + 1) % 4 gives right turn
    } else {
      // Move forward k units
      let dx = directions[directionIndex][0];
      let dy = directions[directionIndex][1];
      for (let step = 0; step < command; step++) {
        let nextX = x + dx;
        let nextY = y + dy;
        let nextPosition = nextX + "," + nextY;
        if (!obstacleSet.has(nextPosition)) {
          x = nextX;
          y = nextY;
          maxDistance = Math.max(maxDistance, x * x + y * y);
        } else {
          break; // Encounter obstacle, stop further movement in this direction
        }
      }
    }
  }

  return maxDistance;
};
