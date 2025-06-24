var frequencySort = function (s) {
  const counter = new Map();
  for (const char of s) {
    counter.set(char, (counter.get(char) || 0) + 1);
  }

  const pq = Array.from(counter.entries());
  pq.sort((a, b) => b[1] - a[1]);

  let result = "";
  for (const [char, freq] of pq) {
    result += char.repeat(freq);
  }

  return result;
};
