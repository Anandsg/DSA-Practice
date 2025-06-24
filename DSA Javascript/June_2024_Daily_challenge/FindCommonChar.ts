function commonChars(words: string[]): string[] {
  let result = [...words[0]];
  for (let word of words.slice(1)) {
    result = result.filter((char) => {
      const index = word.indexOf(char);
      if (index !== -1) {
        word = word.slice(0, index) + word.slice(index + 1);
        return true;
      }
      return false;
    });
  }
  return result;
}
