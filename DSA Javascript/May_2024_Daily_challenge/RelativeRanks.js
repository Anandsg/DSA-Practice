var findRelativeRanks = function (score) {
  let answer = Array(score.length).fill(0);

  let count = 1;

  while (!score.every((item) => item == -1)) {
    let max = Math.max(...score);
    let index = score.indexOf(max);

    switch (count) {
      case 1:
        answer[index] = "Gold Medal";
        score[index] = -1;
        count++;
        break;
      case 2:
        answer[index] = "Silver Medal";
        score[index] = -1;
        count++;
        break;
      case 3:
        answer[index] = "Bronze Medal";
        score[index] = -1;
        count++;
        break;
      default:
        answer[index] = `${count}`;
        score[index] = -1;
        count++;
        break;
    }
  }

  return answer;
};
