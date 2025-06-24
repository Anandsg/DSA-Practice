function minimumCost(source, target, original, changed, cost) {
  if (source.length !== target.length) {
    return -1;
  }

  // Step 1: Build the Graph
  let graph = buildGraph(original, changed, cost);

  // Step 2: Compute Shortest Paths using Floyd-Warshall Algorithm
  floydWarshall(graph);

  // Step 3: Calculate Total Conversion Cost
  let totalCost = 0;
  for (let i = 0; i < source.length; i++) {
    if (source[i] !== target[i]) {
      let conversionCost =
        graph[source.charCodeAt(i) - "a".charCodeAt(0)][
          target.charCodeAt(i) - "a".charCodeAt(0)
        ];
      if (conversionCost === Infinity) {
        return -1; // Conversion not possible
      }
      totalCost += conversionCost;
    }
  }

  return totalCost;
}

function buildGraph(original, changed, cost) {
  const ALPHABET_SIZE = 26;
  let graph = Array.from(Array(ALPHABET_SIZE), () =>
    new Array(ALPHABET_SIZE).fill(Infinity)
  );

  // Initialize graph with direct conversions
  for (let i = 0; i < original.length; i++) {
    let u = original[i].charCodeAt(0) - "a".charCodeAt(0);
    let v = changed[i].charCodeAt(0) - "a".charCodeAt(0);
    graph[u][v] = Math.min(graph[u][v], cost[i]);
  }

  // Setting distance to self as 0
  for (let i = 0; i < ALPHABET_SIZE; i++) {
    graph[i][i] = 0;
  }

  return graph;
}

function floydWarshall(graph) {
  const ALPHABET_SIZE = 26;
  for (let k = 0; k < ALPHABET_SIZE; k++) {
    for (let i = 0; i < ALPHABET_SIZE; i++) {
      for (let j = 0; j < ALPHABET_SIZE; j++) {
        if (graph[i][k] + graph[k][j] < graph[i][j]) {
          graph[i][j] = graph[i][k] + graph[k][j];
        }
      }
    }
  }
}
