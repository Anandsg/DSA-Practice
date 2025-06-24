function equalSubstring(s: string, t: string, maxCost: number): number {
  const cost = s
    .split("")
    .map((char, i) => Math.abs(s.charCodeAt(i) - t.charCodeAt(i)));
  let maxLength = 0,
    currentCost = 0,
    left = 0;
  for (let right = 0; right < cost.length; right++) {
    currentCost += cost[right];
    while (currentCost > maxCost) {
      currentCost -= cost[left];
      left++;
    }
    maxLength = Math.max(maxLength, right - left + 1);
  }
  return maxLength;
}
