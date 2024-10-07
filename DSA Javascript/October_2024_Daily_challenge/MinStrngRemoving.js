var minLength = function (s) {
  let stack = [];

  for (let char of s) {
    if (
      stack.length &&
      ((char === "B" && stack[stack.length - 1] === "A") ||
        (char === "D" && stack[stack.length - 1] === "C"))
    ) {
      stack.pop();
    } else {
      stack.push(char);
    }
  }

  return stack.length;
};
