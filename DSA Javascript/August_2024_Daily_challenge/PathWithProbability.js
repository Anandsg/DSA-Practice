/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[]} succProb
 * @param {number} start
 * @param {number} end
 * @return {number}
 */
var maxProbability = function (n, edges, succProb, start, end) {
  const adj = new Array(n).fill().map(() => []);
  for (let i = 0; i < edges.length; i++) {
    const [a, b] = edges[i];
    adj[a].push([b, succProb[i]]);
    adj[b].push([a, succProb[i]]);
  }
  const queue = new MaxPriorityQueue({ priority: (el) => el[1] });
  queue.enqueue([start, 1]);
  let visit = new Set();
  while (!queue.isEmpty()) {
    const [curr, prob] = queue.dequeue().element;
    visit.add(curr);
    if (curr === end) return prob;

    //Add the neighbours of prob after calculating the probability we would end up with if we follow that path
    for (let [nei, neiProb] of adj[curr]) {
      if (!visit.has(nei)) {
        queue.enqueue([nei, prob * neiProb]);
      }
    }
  }
  return 0;
};
