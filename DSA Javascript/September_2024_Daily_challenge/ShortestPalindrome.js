var shortestPalindrome = function (s) {
  let rev = s.split("").reverse().join("");
  let str = s + "#" + rev;
  let table = new Array(str.length).fill(0);

  for (let i = 1; i < str.length; i++) {
    let j = table[i - 1];
    while (j > 0 && str[i] !== str[j]) {
      j = table[j - 1];
    }
    if (str[i] === str[j]) {
      j++;
    }
    table[i] = j;
  }

  return rev.slice(0, s.length - table[table.length - 1]) + s;
};
