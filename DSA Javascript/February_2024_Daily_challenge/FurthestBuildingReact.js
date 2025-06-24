var furthestBuilding = function (h, b, l) {
  const p = new MaxHeap();

  let i = 0,
    diff = 0;
  for (i = 0; i < h.length - 1; i++) {
    diff = h[i + 1] - h[i];

    if (diff <= 0) {
      continue;
    }

    b -= diff;
    p.push(diff);

    if (b < 0) {
      b += p.pop();
      l--;
    }

    if (l < 0) {
      break;
    }
  }

  return i;
};

class MaxHeap {
  constructor() {
    this.heap = [];
  }

  push(val) {
    this.heap.push(val);
    this.heapifyUp();
  }

  pop() {
    const max = this.heap[0];
    const last = this.heap.pop();

    if (this.heap.length > 0) {
      this.heap[0] = last;
      this.heapifyDown();
    }

    return max;
  }

  heapifyUp() {
    let current = this.heap.length - 1;
    while (current > 0) {
      const parent = Math.floor((current - 1) / 2);
      if (this.heap[parent] >= this.heap[current]) {
        break;
      }
      [this.heap[parent], this.heap[current]] = [
        this.heap[current],
        this.heap[parent],
      ];
      current = parent;
    }
  }

  heapifyDown() {
    let current = 0;
    while (true) {
      let leftChild = 2 * current + 1;
      let rightChild = 2 * current + 2;
      let maxChild = leftChild;

      if (
        rightChild < this.heap.length &&
        this.heap[rightChild] > this.heap[leftChild]
      ) {
        maxChild = rightChild;
      }

      if (
        leftChild >= this.heap.length ||
        this.heap[current] >= this.heap[maxChild]
      ) {
        break;
      }

      [this.heap[current], this.heap[maxChild]] = [
        this.heap[maxChild],
        this.heap[current],
      ];
      current = maxChild;
    }
  }
}
