var groupAnagrams = function (strs) {
  const hashMap = {};

  for (let i = 0; i < strs.length; i++) {
    const sortedStr = strs[i].split("").sort().join();
    if (!hashMap[sortedStr]) {
      hashMap[sortedStr] = [strs[i]];
    } else {
      hashMap[sortedStr].push(strs[i]);
    }
  }

  return Object.values(hashMap);
};
