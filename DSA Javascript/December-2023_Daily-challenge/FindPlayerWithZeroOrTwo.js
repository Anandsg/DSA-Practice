/**
 * @param {number[][]} matches
 * @return {number[][]}
 */
var findWinners = function (matches) {
  const hash = matches.reduce((res, [winner, loser]) => {
    if (!res[winner]) {
      res[winner] = 0;
    }

    if (!res[loser]) {
      res[loser] = 0;
    }

    res[loser]++;

    return res;
  }, {});

  return Object.keys(hash).reduce(
    (res, x) => {
      const count = hash[x];

      if (count === 0) {
        res[0].push(x);
      } else if (count === 1) {
        res[1].push(x);
      }

      return res;
    },
    [[], []]
  );
};
