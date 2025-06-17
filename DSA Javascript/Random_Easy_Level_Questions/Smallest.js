function SmallestNum() {
  let smallest = Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i];
    }
  }
  return smallest;
}

let arr = [3, -1, 5, -6, 4, 10];

let res = SmallestNum(arr);
console.log(res);
