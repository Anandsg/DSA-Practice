var maxProbability = function (n, edges, succProb, start, end) {
  // Initialize an adjacency list for the graph
  const graph = new Array(n).fill(0).map(() => []);

  // Build the graph
  for (let i = 0; i < edges.length; i++) {
    const [a, b] = edges[i];
    const probability = succProb[i];
    graph[a].push([b, probability]);
    graph[b].push([a, probability]);
  }

  // Max-heap using priority queue (stores [currentNode, currentProbability])
  const maxHeap = new MaxPriorityQueue({ priority: (x) => x[1] });
  maxHeap.enqueue([start, 1]);

  // Probability array to keep track of the maximum probability to reach each node
  const probabilities = new Array(n).fill(0);
  probabilities[start] = 1;

  // Dijkstra-like algorithm to maximize probability
  while (!maxHeap.isEmpty()) {
    const [currentNode, currentProbability] = maxHeap.dequeue().element;

    // If we've reached the end node, return the probability
    if (currentNode === end) return currentProbability;

    // Visit all neighbors of the current node
    for (const [neighbor, probability] of graph[currentNode]) {
      const newProbability = currentProbability * probability;

      // If the new probability is higher, update and add to the heap
      if (newProbability > probabilities[neighbor]) {
        probabilities[neighbor] = newProbability;
        maxHeap.enqueue([neighbor, newProbability]);
      }
    }
  }

  // If no path found, return 0
  return 0;
};
