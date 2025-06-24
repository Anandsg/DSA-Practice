var reversePrefix = function (word, ch) {
  let index = word.indexOf(ch);
  let left = index;
  let result = "";
  while (left >= 0) {
    result += word[left];
    left -= 1;
  }
  for (let i = index + 1; i < word.length; i += 1) {
    result += word[i];
  }

  return result;
};
