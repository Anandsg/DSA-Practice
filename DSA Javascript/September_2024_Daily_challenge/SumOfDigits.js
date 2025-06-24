var getLucky = function (s, k) {
  let sPosition = "";
  for (let char of s) {
    sPosition += char.charCodeAt(0) - 96;
  }

  while (k) {
    let sum = 0;
    sPosition = sPosition.split("");
    for (let ele of sPosition) {
      sum += +ele;
    }
    sPosition = sum.toString();
    k--;
    if (k === 0) {
      return sum;
    }
  }
};
