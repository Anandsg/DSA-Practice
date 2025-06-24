var secondMinimum = function (n, edges, time, change) {
  const graph = new Map();
  for (let i = 1; i <= n; i++) graph.set(i, []);
  for (const [u, v] of edges) {
    graph.get(u).push(v);
    graph.get(v).push(u);
  }

  const first = Array(n + 1).fill(Infinity);
  const second = Array(n + 1).fill(Infinity);
  first[1] = 0;

  const q = new MinPriorityQueue();
  q.enqueue(1, 0);

  while (q.size()) {
    let { element: node, priority: cur } = q.dequeue();
    cur += time; // cur is arrival time

    let leave = cur; // leave time and arrival time are different becuz of lights
    if ((cur / change) & 1) leave += change - (cur % change);

    for (let nei of graph.get(node)) {
      if (second[nei] <= cur) continue;
      if (first[nei] === cur) continue;

      if (first[nei] > cur) {
        second[nei] = first[nei];
        first[nei] = cur;
      } else {
        second[nei] = cur;
      }

      q.enqueue(nei, leave);
    }
  }

  return second[n];
};
