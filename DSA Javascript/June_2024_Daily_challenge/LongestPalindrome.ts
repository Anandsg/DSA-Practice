function longestPalindrome(s: string): number {
  const registry = new Map<string, number>();

  // hash table of chars frequency
  for (const char of s) {
    registry.set(char, (registry.get(char) ?? 0) + 1);
  }

  let result = 0;
  let biggestOdd = 0;
  for (const value of registry.values()) {
    // special treatment when is odd
    if (value % 2 === 1) {
      if (value > biggestOdd) {
        result += biggestOdd - 1;
        biggestOdd = value;
      } else {
        result += value - 1;
      }

      continue;
    }

    result += value;
  }

  // only add +1 when biggestOdd had changed
  return result + biggestOdd + +!!biggestOdd;
}
