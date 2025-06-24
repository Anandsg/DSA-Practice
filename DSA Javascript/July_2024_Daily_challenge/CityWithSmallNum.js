var findTheCity = function (n, edges, distanceThreshold) {
  const dist = Array.from({ length: n }, () =>
    Array.from({ length: n }, () => Infinity)
  );
  for (let i = 0; i < n; i++) {
    dist[i][i] = 0;
  }
  edges.forEach(([u, v, w]) => {
    dist[u][v] = w;
    dist[v][u] = w; // Since it's an undirected graph
  });
  for (let k = 0; k < n; k++) {
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (dist[i][j] > dist[i][k] + dist[k][j]) {
          dist[i][j] = dist[i][k] + dist[k][j];
        }
      }
    }
  }

  // Function to count number of reachable cities within distanceThreshold
  const countReachableCities = (city) => {
    let count = 0;
    for (let i = 0; i < n; i++) {
      if (i !== city && dist[city][i] <= distanceThreshold) {
        count++;
      }
    }
    return count;
  };

  // Find the city with the minimum number of neighbors within distanceThreshold
  let minNeighbors = n; // start with maximum possible value
  let resultCity = -1;

  for (let i = 0; i < n; i++) {
    const reachableCities = countReachableCities(i);
    if (reachableCities <= minNeighbors) {
      minNeighbors = reachableCities;
      resultCity = i;
    }
  }

  return resultCity;
};
