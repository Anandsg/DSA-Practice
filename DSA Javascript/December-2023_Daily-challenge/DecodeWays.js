var numDecodings = function (s) {
  let map = new Map();

  function helper(i) {
    if (i >= s.length) {
      return 1;
    }
    if (s[i] === "0") {
      return 0;
    }
    if (map.has(i)) {
      return map.get(i);
    }

    let ways = helper(i + 1);
    if (i + 2 <= s.length && parseInt(s.substring(i, i + 2)) <= 26) {
      ways += helper(i + 2);
    }

    map.set(i, ways);
    return ways;
  }

  return helper(0);
};
