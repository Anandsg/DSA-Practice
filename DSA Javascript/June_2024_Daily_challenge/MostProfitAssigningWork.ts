/**
 * @param {number[]} difficulty
 * @param {number[]} profit
 * @param {number[]} worker
 * @return {number}
 */
var maxProfitAssignment = function (difficulty, profit, worker) {
  let totalProfit = 0;

  const jobs = difficulty
    .map((diff, index) => ({
      difficulty: diff,
      profit: profit[index],
    }))
    .sort((a, b) => b.profit - a.profit);

  worker.forEach((w) => {
    for (let job of jobs) {
      if (w >= job.difficulty) {
        totalProfit += job.profit;
        break;
      }
    }
  });

  return totalProfit;
};
