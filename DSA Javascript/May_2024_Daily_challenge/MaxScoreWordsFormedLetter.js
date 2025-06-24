var maxScoreWords = function (words, letters, score) {
  const letterCount = {};
  for (let char of letters) {
    if (!letterCount[char]) letterCount[char] = 0;
    letterCount[char]++;
  }

  function wordScore(word) {
    return word
      .split("")
      .reduce(
        (acc, char) => acc + score[char.charCodeAt(0) - "a".charCodeAt(0)],
        0
      );
  }

  function canForm(word, letterCount) {
    const wordCount = {};
    for (let char of word) {
      if (!wordCount[char]) wordCount[char] = 0;
      wordCount[char]++;
      if (!letterCount[char] || wordCount[char] > letterCount[char])
        return false;
    }
    return true;
  }

  function backtrack(index, letterCount) {
    if (index === words.length) return 0;

    let maxScore = backtrack(index + 1, letterCount);

    const word = words[index];
    if (canForm(word, letterCount)) {
      const newLetterCount = { ...letterCount };
      for (let char of word) newLetterCount[char]--;
      maxScore = Math.max(
        maxScore,
        wordScore(word) + backtrack(index + 1, newLetterCount)
      );
    }

    return maxScore;
  }

  return backtrack(0, letterCount);
};
