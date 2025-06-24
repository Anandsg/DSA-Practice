var findCheapestPrice = function (n, flights, src, dst, k) {
  const adj = new Map();
  for (const [from, to, price] of flights) {
    if (!adj.has(from)) adj.set(from, []);
    adj.get(from).push([to, price]);
  }

  const dist = new Array(n).fill(Infinity);
  dist[src] = 0;

  const queue = [[src, 0]];
  let stops = 0;

  while (queue.length && stops <= k) {
    const size = queue.length;
    for (let i = 0; i < size; i++) {
      const [node, distance] = queue.shift();

      if (!adj.has(node)) continue;

      for (const [neighbour, price] of adj.get(node)) {
        if (price + distance >= dist[neighbour]) continue;
        dist[neighbour] = price + distance;
        queue.push([neighbour, dist[neighbour]]);
      }
    }
    stops++;
  }

  return dist[dst] === Infinity ? -1 : dist[dst];
};
