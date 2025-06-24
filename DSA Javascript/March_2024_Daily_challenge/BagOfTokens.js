var bagOfTokensScore = function (tokens, power) {
  const len = tokens.length;

  tokens.sort((a, b) => a - b);

  let maxScore = 0;
  let currScore = 0;

  let left = 0;
  let right = len - 1;

  while (left <= right) {
    const leftPower = tokens[left];
    const rightPower = tokens[right];

    if (power >= leftPower) {
      power -= leftPower;
      currScore++;

      maxScore = Math.max(currScore, maxScore);
      left++;
    } else if (currScore > 0) {
      power += rightPower;
      currScore--;
      right--;
    } else {
      return maxScore;
    }
  }

  return maxScore;
};
