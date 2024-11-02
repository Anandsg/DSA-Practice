function isCircularSentence(sentence) {
  const words = sentence.split(" ");
  const n = words.length;
  for (let i = 0; i < n; i++) {
    const currentLast = words[i].charAt(words[i].length - 1);
    const nextFirst = words[(i + 1) % n].charAt(0);
    if (currentLast !== nextFirst) return false;
  }
  return true;
}
