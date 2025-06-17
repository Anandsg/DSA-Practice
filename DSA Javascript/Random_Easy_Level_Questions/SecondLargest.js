function SecondLargestNum() {
  let largest = -Infinity;
  let SecondLargest = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      // 4 > Inf
      SecondLargest = largest;
      largest = arr[i]; // 4, 5
    } else if (arr[i] > SecondLargest) {
      SecondLargest = arr[i];
    }
  }
  return SecondLargest;
}

let arr = [4, 5, 8, 2, 9, 10, 1];

let res = SecondLargestNum(arr);
console.log(res);

/*
 i | L | SL
 0 | 4 | In
 1 | 5 | 
 /
 */
