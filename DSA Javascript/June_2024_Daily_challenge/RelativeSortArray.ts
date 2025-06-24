function relativeSortArray(arr1: number[], arr2: number[]): number[] {
  const result: number[] = [];
  for (let num1 of arr2) {
    for (let num2 of arr1) {
      const index = arr1.indexOf(num1);
      if (num1 === num2) {
        result.push(num1);
        arr1 = arr1.filter((x) => x !== num2);
      }
    }
  }
  return [...result, ...arr1.sort((a, b) => a - b)];
}
