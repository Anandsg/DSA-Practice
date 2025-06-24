var compressedString = function (word) {
  let comp = "";
  let i = 0;

  while (i < word.length) {
    let char = word[i];
    let count = 0;

    while (i < word.length && word[i] === char && count < 9) {
      count++;
      i++;
    }

    comp += count.toString() + char;
  }

  return comp;
};

// Example usage:
// var word = "abcde";
// console.log(compressedString(word)); // Output should be "1a1b1c1d1e"
