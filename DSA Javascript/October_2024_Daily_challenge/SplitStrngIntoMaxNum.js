function maxUniqueSplit(s) {
  const seen = new Set();
  let maxCount = 0;

  function backtrack(start, count) {
    if (start === s.length) {
      maxCount = Math.max(maxCount, count);
      return;
    }
    for (let end = start + 1; end <= s.length; end++) {
      const substring = s.slice(start, end);
      if (!seen.has(substring)) {
        seen.add(substring);
        backtrack(end, count + 1);
        seen.delete(substring);
      }
    }
  }

  backtrack(0, 0);
  return maxCount;
}
