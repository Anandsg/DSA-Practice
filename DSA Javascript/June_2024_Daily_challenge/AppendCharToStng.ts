function appendCharacters(s: string, t: string): number {
  let sPointer = 0;
  let tPointer = 0;

  while (sPointer < s.length && tPointer < t.length) {
    if (s[sPointer] === t[tPointer]) {
      tPointer++;
    }
    sPointer++;
  }

  return t.length - tPointer;
}
