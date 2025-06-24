var reverseParentheses = function (s) {
  let arr = [];
  let stack = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      stack.push(arr);
      arr = [];
    } else if (s[i] === ")") {
      arr.reverse();
      arr = stack.pop().concat(arr);
    } else {
      arr.push(s[i]);
    }
  }

  return arr.join("");
};
