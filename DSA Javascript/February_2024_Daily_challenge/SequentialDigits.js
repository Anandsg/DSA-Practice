/**
 * @param {number} low
 * @param {number} high
 * @return {number[]}
 */
var sequentialDigits = function (low, high) {
  const result = [];

  // Function to generate sequential digits starting from a specific digit
  const generateSequential = (start, current, high) => {
    if (current > high) return;

    result.push(current);

    // Extract the last digit and increment it
    const lastDigit = (current % 10) + 1;

    // Check if the last digit exceeds 9, if yes, return
    if (lastDigit > 9) return;

    // Recursively generate the next sequential number
    generateSequential(start, current * 10 + lastDigit, high);
  };

  // Loop through each digit from 1 to 9
  for (let i = 1; i <= 9; i++) {
    generateSequential(i, i, high);
  }

  // Filter the generated numbers within the specified range
  const filteredResult = result.filter((num) => num >= low && num <= high);

  // Sort the result array
  filteredResult.sort((a, b) => a - b);

  return filteredResult;
};
