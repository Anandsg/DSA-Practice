const halvesAreAlike = (s) => {
  const vowels = new Set(["e", "i", "a", "o", "u", "E", "I", "A", "O", "U"]);
  let count = 0;

  for (let i = 0; i < s.length / 2; i++) {
    if (vowels.has(s[i])) {
      count++;
    }

    if (vowels.has(s[i + s.length / 2])) {
      count--;
    }
  }

  return count === 0;
};
