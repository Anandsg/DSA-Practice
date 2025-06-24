var firstPalindrome = function (words) {
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    let pal = true;
    for (let j = 0, k = word.length - 1; j < k; k--, j++) {
      if (word[j] !== word[k]) {
        pal = false;
        break;
      }
    }
    if (pal) return word;
  }
  return "";
};
