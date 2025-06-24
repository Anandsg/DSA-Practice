function makeFancyString(s) {
  let result = "";
  let count = 0; // To count consecutive characters
  let prevChar = ""; // To store the previous character

  for (let char of s) {
    // Reset count if we encounter a different character
    if (char !== prevChar) {
      count = 1;
      prevChar = char;
    } else {
      count++;
    }

    // Add character to result only if count is less than or equal to 2
    if (count <= 2) {
      result += char;
    }
  }

  return result;
}

// Example test cases
