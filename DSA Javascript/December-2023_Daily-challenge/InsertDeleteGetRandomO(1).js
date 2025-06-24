class RandomizedSet {
  constructor() {
    this.map = new Map();
    this.arr = [];
  }

  insert(val) {
    if (this.map.has(val)) return false;

    this.map.set(val, this.arr.length);
    this.arr.push(val);
    return true;
  }

  remove(val) {
    if (!this.map.has(val)) return false;

    const valIdx = this.map.get(val);
    const lastIdx = this.arr.length - 1;
    const lastNum = this.arr[lastIdx];

    // swap 'val' with the last element
    [this.arr[valIdx], this.arr[lastIdx]] = [
      this.arr[lastIdx],
      this.arr[valIdx],
    ];
    // pop 'val' from the array
    this.arr.pop();
    // update the last element's index to be 'val's' index
    this.map.set(lastNum, valIdx);
    // delete 'val' from the map
    this.map.delete(val);
    return true;
  }

  getRandom() {
    const randIdx = Math.floor(Math.random() * this.arr.length);
    return this.arr[randIdx];
  }
}
