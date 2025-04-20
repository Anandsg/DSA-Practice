function numRabbits(answers) {
  const count = {};

  for (let answer of answers) {
    count[answer] = (count[answer] || 0) + 1;
  }

  let minRabbits = 0;
  for (let k in count) {
    k = parseInt(k); // convert key to integer
    minRabbits += Math.ceil(count[k] / (k + 1)) * (k + 1);
  }

  return minRabbits;
}
