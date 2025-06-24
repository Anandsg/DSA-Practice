var imageSmoother = function (img) {
  const rows = img.length;
  const cols = img[0].length;
  function averageValue(r, c) {
    let total = 0;
    let count = 0;

    const top = Math.max(0, r - 1);
    const bottom = Math.min(rows, r + 2);
    const left = Math.max(0, c - 1);
    const right = Math.min(cols, c + 2);

    for (let row = top; row < bottom; row++) {
      for (let col = left; col < right; col++) {
        total += img[row][col];
        count += 1;
      }
    }
    return Math.floor(total / count);
  }
  return Array.from({ length: rows }, (_, r) =>
    Array.from({ length: cols }, (_, c) => averageValue(r, c))
  );
};
