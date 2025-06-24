var closeStrings = function (word1, word2) {
  let obj1 = {};
  let obj2 = {};

  if (word1.length != word2.length) return false;

  for (let char of word1) {
    if (!obj1[char]) obj1[char] = 0;
    ++obj1[char];
  }

  for (let char of word2) {
    if (!obj2[char]) obj2[char] = 0;
    ++obj2[char];
  }
  let chars1 = Object.keys(obj1);
  let chars2 = Object.keys(obj2);

  chars1.sort();
  chars2.sort();

  if (chars1.length !== chars2.length) {
    return false;
  } else {
    for (let i = 0; i < chars1.length; i++) {
      if (chars1[i] != chars2[i]) {
        return false;
      }
    }
  }

  let vals1 = Object.values(obj1);
  let vals2 = Object.values(obj2);

  vals1.sort((a, b) => a - b);
  vals2.sort((a, b) => a - b);

  for (let i = 0; i < vals1.length; i++) {
    if (vals1[i] != vals2[i]) {
      return false;
    }
  }

  return true;
};
