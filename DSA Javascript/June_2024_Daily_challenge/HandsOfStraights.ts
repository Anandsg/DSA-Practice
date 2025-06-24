function isNStraightHand(hand: number[], groupSize: number): boolean {
  const n = hand.length;
  if (n % groupSize) return false;

  const map = new Map();
  for (let i = 0; i < n; i++) {
    map.set(hand[i], map.get(hand[i]) + 1 || 1);
  }

  let keys = [...map.keys()].sort((a, b) => a - b);

  for (let i = 0; i < keys.length; ) {
    for (let j = 0, groupStart = keys[i]; j < groupSize; j++) {
      const current = groupStart + j;
      const count = map.get(current);
      if (!count) return false;
      map.set(current, count - 1);
      if (count == 1) i++;
    }
  }

  return true;
}
