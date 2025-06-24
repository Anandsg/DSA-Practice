var canMakeSubsequence = function (s1, s2) {
  function nextChar(ch) {
    let r = ch.charCodeAt(0) + 1;
    if (ch === "z") r = "a".charCodeAt(0);
    return String.fromCharCode(r);
  }

  let m = s1.length;
  let n = s2.length;

  let j = 0;
  for (let i = 0; i < m; i++) {
    if (s1[i] === s2[j] || nextChar(s1[i]) === s2[j]) {
      j++;
    }
  }

  return j === n;
};
