function replaceWords(dictionary: string[], sentence: string): string {
  const dicSet = new Set(dictionary);
  const words = sentence.split(" ");
  let answer = "";

  for (let i = 0; i < words.length; i++) {
    let catchWord = false;
    for (let right = 0; right < words[i].length; right++) {
      let nowSlice = words[i].slice(0, right);
      if (dicSet.has(nowSlice)) {
        catchWord = true;
        answer += nowSlice;
        break;
      }
    }

    if (!catchWord) {
      answer += words[i];
    }

    if (i !== words.length - 1) {
      answer += " ";
    }
  }

  return answer;
}
