var maximumOddBinaryNumber = function (s) {
  let k = 0;
  for (let c of s) if (c === "1") k++;
  return "1".repeat(k - 1) + "0".repeat(s.length - k) + "1";
};
