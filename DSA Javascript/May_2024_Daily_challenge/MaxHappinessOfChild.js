var maximumHappinessSum = function (happiness, k) {
  happiness.sort((a, b) => b - a);
  let totalHappiness = 0;
  let decrement = 0;
  for (let i = 0; i < k; i++) {
    totalHappiness += Math.max(happiness[i] - decrement, 0);
    decrement++;
  }
  return totalHappiness;
};
