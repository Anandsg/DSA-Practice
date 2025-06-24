var kWeakestRows = function (mat, k) {
    const strength = mat.map((row, i) => [i, row.reduce((a, b) => a + b)]);
    strength.sort((a, b) => a[1] - b[1]);
    return strength.slice(0, k).map(ele => ele[0]);
};