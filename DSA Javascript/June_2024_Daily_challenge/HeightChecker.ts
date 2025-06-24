function heightChecker(heights: number[]): number {
  let expected: number[] = [...heights].sort((a, b) => a - b);
  let count: number = 0;
  expected.forEach((val, index) => {
    val != heights[index] ? count++ : null;
  });
  return count;
}
