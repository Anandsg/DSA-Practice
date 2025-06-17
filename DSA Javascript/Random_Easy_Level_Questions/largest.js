function LargestNum(arr) {
  let largest = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  return largest;
}

let arr = [4, 5, 7, 12, 3, 8];
let res = LargestNum(arr);
console.log(res);
