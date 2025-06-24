var mincostToHireWorkers = function (quality, wage, k) {
  const ratios = [];

  for (let i = 0; i < quality.length; i++) {
    ratios.push([(wage[i] * 1.0) / quality[i], quality[i]]);
  }

  ratios.sort((a, b) => a[0] - b[0]);

  const priorityQueue = [];
  let qualitySum = 0;
  let ans = Infinity;

  for (let i = 0; i < ratios.length; i++) {
    const [ratio, q] = ratios[i];

    qualitySum += q;
    priorityQueue.push(q);

    if (priorityQueue.length > k) {
      priorityQueue.sort((a, b) => a - b);

      const max = priorityQueue.pop();
      qualitySum -= max;
    }

    if (priorityQueue.length == k) {
      ans = Math.min(ans, ratio * qualitySum);
    }
  }

  return ans;
};
