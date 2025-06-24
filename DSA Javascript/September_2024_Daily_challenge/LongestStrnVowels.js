function findTheLongestSubstring(s) {
  let maxLen = 0;
  let state = 0;
  const map = new Map([[0, -1]]);
  const vowels = "aeiou";

  for (let i = 0; i < s.length; i++) {
    let index = vowels.indexOf(s[i]);
    if (index !== -1) {
      state ^= 1 << index;
    }
    if (map.has(state)) {
      maxLen = Math.max(maxLen, i - map.get(state));
    } else {
      map.set(state, i);
    }
  }

  return maxLen;
}
