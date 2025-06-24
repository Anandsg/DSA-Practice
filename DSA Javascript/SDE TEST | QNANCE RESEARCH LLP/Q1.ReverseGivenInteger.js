var reverse = function (x) {
  let negative = x < 0;
  let reversed = parseInt(Math.abs(x).toString().split("").reverse().join(""));
  reversed = negative ? -reversed : reversed;
  if (reversed < Math.pow(-2, 31) || reversed > Math.pow(2, 31) - 1) {
    return 0;
  }
  return reversed;
};
