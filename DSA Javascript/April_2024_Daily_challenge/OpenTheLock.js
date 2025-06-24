function openLock(deadends, target) {
  const visited = new Set(deadends);
  const queue = ["0000"];
  let steps = 0;

  while (queue.length > 0) {
    const size = queue.length;

    for (let i = 0; i < size; i++) {
      const current = queue.shift();

      if (current === target) {
        return steps;
      }

      if (visited.has(current)) {
        continue;
      }

      visited.add(current);

      for (let j = 0; j < 4; j++) {
        const digit = Number(current[j]);

        // Rotate wheel up
        const up =
          current.substring(0, j) +
          (digit === 9 ? 0 : digit + 1) +
          current.substring(j + 1);
        // Rotate wheel down
        const down =
          current.substring(0, j) +
          (digit === 0 ? 9 : digit - 1) +
          current.substring(j + 1);

        if (!visited.has(up)) {
          queue.push(up);
        }
        if (!visited.has(down)) {
          queue.push(down);
        }
      }
    }

    steps++;
  }

  return -1;
}
