function initEratosthenesSieve(n) {
  eratosthenesSieve = Array.from(Array(n + 1), () => []);

  for (let i = 2; i <= n; i++) {
    if (eratosthenesSieve[i].length === 0) {
      for (let j = i; j <= n; j += i) {
        eratosthenesSieve[j].push(i);
      }
    }
  }
}

initEratosthenesSieve(100000);

/**
 * @template TItemKey
 */
class DisjointSets {
  /**
   * @template TItemKey
   * @typedef {{ rank: number, parent: TItemKey, key: TItemKey }} SetNode<TItemKey>
   */

  constructor() {
    /**
     * @private
     * @type {Map<TItemKey, SetNode<TItemKey>>}
     */
    this._nodesMapper = new Map();

    /**
     * @private
     * @type {parts}
     */
    this._numberOfSets = 0;
  }

  getKeys() {
    return Array.from(this._nodesMapper.keys());
  }

  getNumberOfSets() {
    return this._numberOfSets;
  }

  /**
   * @param  {TItemKey} key
   * @returns {boolean}
   */
  has(key) {
    return this._nodesMapper.has(key);
  }

  /**
   * @param  {...TItemKey} keys
   */
  add(...keys) {
    for (let key of keys) {
      if (this._nodesMapper.has(key)) continue;
      this._nodesMapper.set(key, { rank: 1, parent: key, key });
      this._numberOfSets++;
    }
  }

  /**
   *
   * @param {TItemKey} key
   * @returns {TItemKey}
   */
  getRoot(key) {
    let node = this._requireNode(key);
    /** @type {SetNode<TItemKey>[]} */
    let path = [];
    while (node.parent !== node.key) {
      path.push(node);
      node = this._requireNode(node.parent);
    }
    path.forEach((pathNode) => (pathNode.parent = node.key));
    return node.key;
  }

  /**
   * @param  {...TItemKey} keys
   */
  union(...keys) {
    const first = keys[0];
    if (!first) return;

    for (let i = 1; i < keys.length; i++) {
      this._union2Sets(first, keys[i]);
    }
  }

  /**
   * @private
   * @param {TItemKey} key1
   * @param {TItemKey} key2
   */
  _union2Sets(key1, key2) {
    const root1 = this._requireNode(this.getRoot(key1));
    const root2 = this._requireNode(this.getRoot(key2));

    if (root1.key === root2.key) return;

    if (root1.rank < root2.rank) {
      root2.rank += root1.rank;
      root1.parent = root2.key;
    } else {
      root1.rank += root2.rank;
      root2.parent = root1.parent;
    }
    this._numberOfSets--;
  }

  /**
   * @private
   * @param {TItemKey} key
   */
  _requireNode(key) {
    const node = this._nodesMapper.get(key);
    if (!node)
      throw new Error(`Key "${key}" is missing from the Disjoint Set.`);
    return node;
  }
}

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canTraverseAllPairs = function (nums) {
  if (nums.length === 1) return true;

  const dset = new DisjointSets();
  for (let num of nums) {
    if (num === 1) return false;
    dset.add(...eratosthenesSieve[num]);
    dset.union(...eratosthenesSieve[num]);
  }

  return dset.getNumberOfSets() === 1;
};
