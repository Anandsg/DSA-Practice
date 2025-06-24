var wonderfulSubstrings = function (word) {
  const count = new Map().set(0, 1);
  let prefix = 0,
    result = 0,
    mask = 0;

  for (let char of word) {
    mask ^= 1 << (char.charCodeAt(0) - "a".charCodeAt(0));
    result += count.get(mask) || 0;
    for (let i = 0; i < 10; i++) {
      result += count.get(mask ^ (1 << i)) || 0;
    }
    count.set(mask, (count.get(mask) || 0) + 1);
  }

  return result;
};
