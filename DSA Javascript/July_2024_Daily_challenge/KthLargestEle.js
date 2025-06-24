var KthLargest = function (k, nums) {
  this.k = k;
  this.minHeap = [];

  // Initialize the min-heap with the given nums
  for (let num of nums) {
    this.add(num);
  }
};

/**
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function (val) {
  // Add the new value to the min-heap
  this.minHeap.push(val);

  // Maintain the min-heap property (smallest element on top)
  this.minHeap.sort((a, b) => a - b);

  // If the size of the heap exceeds k, remove the smallest element
  if (this.minHeap.length > this.k) {
    this.minHeap.shift(); // Remove the smallest element (root of min-heap)
  }

  // Return the kth largest element
  return this.minHeap[0];
};

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */
