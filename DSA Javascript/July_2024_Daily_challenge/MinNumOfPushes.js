var minimumPushes = function (word) {
  const hash = new Map(),
    buttons = new Map();
  const arr = [];

  for (const s of word) {
    hash.set(s, (hash.get(s) ?? 0) + 1);
  }

  for (const [char, count] of hash) {
    arr.push({ char, count });
  }

  return arr
    .sort((a, b) => b.count - a.count)
    .reduce((sum, { count }, idx) => {
      const btn = (idx + 1) % 8;
      buttons.set(btn, (buttons.get(btn) ?? 0) + 1);

      return sum + count * buttons.get(btn);
    }, 0);
};
