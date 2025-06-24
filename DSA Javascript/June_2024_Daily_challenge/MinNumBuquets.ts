function minDays(bloomDay: number[], m: number, k: number): number {
  const n = bloomDay.length;

  if (m * k > n) return -1;

  let left = Math.min(...bloomDay);
  let right = Math.max(...bloomDay);

  const canMakeBouquets = (days: number): boolean => {
    let bouquets = 0;
    let flowers = 0;

    for (const bloom of bloomDay) {
      if (bloom <= days) {
        flowers++;
        if (flowers == k) {
          bouquets++;
          flowers = 0;
        }
      } else {
        flowers = 0;
      }
    }

    return bouquets >= m;
  };

  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (canMakeBouquets(mid)) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }

  return left;
}
