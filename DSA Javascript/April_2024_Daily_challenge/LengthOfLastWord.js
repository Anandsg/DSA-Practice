var lengthOfLastWord = function (s) {
  //paso#1
  s = s.trim();

  //paso#2
  const length = s.length - 1;

  //paso#3
  let i;
  for (i = length; i >= 0; i--) {
    if (s.charAt(i) === " ") {
      break;
    }
  }

  //paso#4
  return length - i;
};
