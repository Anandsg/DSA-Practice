/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var sumOfDistancesInTree = function (n, edges) {
  // Create an adjacency list to represent the tree
  const graph = new Array(n).fill().map(() => []);
  for (const [a, b] of edges) {
    graph[a].push(b);
    graph[b].push(a);
  }

  // Array to store the number of nodes in the subtree rooted at each node
  const subtreeCount = new Array(n).fill(1);

  // Array to store the sum of distances for each node
  const result = new Array(n).fill(0);

  // Helper function to perform DFS
  function dfs(node, parent) {
    for (const child of graph[node]) {
      if (child !== parent) {
        dfs(child, node);
        subtreeCount[node] += subtreeCount[child];
        result[node] += result[child] + subtreeCount[child];
      }
    }
  }

  // Perform DFS from the root (node 0)
  dfs(0, -1);

  // Helper function to perform second DFS to calculate distances for all nodes
  function dfs2(node, parent) {
    for (const child of graph[node]) {
      if (child !== parent) {
        result[child] =
          result[node] - subtreeCount[child] + (n - subtreeCount[child]);
        dfs2(child, node);
      }
    }
  }

  // Perform second DFS to calculate distances for all nodes
  dfs2(0, -1);

  return result;
};
