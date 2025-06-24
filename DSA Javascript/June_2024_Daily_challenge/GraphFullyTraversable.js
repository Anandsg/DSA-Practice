class UnionFind {
  constructor(n) {
    this.parent = Array.from({ length: n + 1 }, (_, i) => i);
    this.rank = Array(n + 1).fill(0);
    this.components = n;
  }

  find(x) {
    if (this.parent[x] !== x) {
      this.parent[x] = this.find(this.parent[x]);
    }
    return this.parent[x];
  }

  union(x, y) {
    const rootX = this.find(x);
    const rootY = this.find(y);

    if (rootX !== rootY) {
      if (this.rank[rootX] > this.rank[rootY]) {
        this.parent[rootY] = rootX;
      } else if (this.rank[rootX] < this.rank[rootY]) {
        this.parent[rootX] = rootY;
      } else {
        this.parent[rootY] = rootX;
        this.rank[rootX]++;
      }
      this.components--;
      return true;
    }
    return false;
  }

  isConnected() {
    return this.components === 1;
  }
}

/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var maxNumEdgesToRemove = function (n, edges) {
  const ufAlice = new UnionFind(n);
  const ufBob = new UnionFind(n);
  let usedEdges = 0;

  // Process type 3 edges first
  for (const [type, u, v] of edges) {
    if (type === 3) {
      const aliceUnion = ufAlice.union(u, v);
      const bobUnion = ufBob.union(u, v);
      if (aliceUnion || bobUnion) {
        usedEdges++;
      }
    }
  }

  // Process type 1 edges for Alice
  for (const [type, u, v] of edges) {
    if (type === 1) {
      if (ufAlice.union(u, v)) {
        usedEdges++;
      }
    }
  }

  // Process type 2 edges for Bob
  for (const [type, u, v] of edges) {
    if (type === 2) {
      if (ufBob.union(u, v)) {
        usedEdges++;
      }
    }
  }

  // Check if both Alice and Bob can traverse the entire graph
  if (!ufAlice.isConnected() || !ufBob.isConnected()) {
    return -1;
  }

  // Maximum number of removable edges
  return edges.length - usedEdges;
};
