var kthSmallestPrimeFraction = function (arr, k) {
  let newarr = new MaxPriorityQueue();

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      newarr.enqueue(`${arr[i]} ${arr[j]}`, arr[i] / arr[j]);
      if (newarr.size() > k) {
        newarr.dequeue();
      }
    }
  }
  return newarr
    .dequeue()
    .element.split(" ")
    .map((v) => Number(v));
};
