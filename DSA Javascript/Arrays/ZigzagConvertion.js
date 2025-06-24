if (numRows === 1) {
    return s;
}
let result = '';
const n = s.length;
const cycleLen = 2 * numRows - 2;
for (let i = 0; i < numRows; i++) {
    for (let j = 0; j + i < n; j += cycleLen) {
        result += s[j + i];
        if (i !== 0 && i !== numRows - 1 && j + cycleLen - i < n) {
            result += s[j + cycleLen - i];
        }
    }
}
return result;