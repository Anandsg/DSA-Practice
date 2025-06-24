var findJudge = function (n, trust) {
  if (n === 1 && !trust.length) return 1;
  const hashmapTrust = new Map();
  const hashmapPerson = new Map();
  for (let i = 0; i < trust.length; i++) {
    if (!hashmapTrust.has(trust[i][1])) {
      hashmapTrust.set(trust[i][1], [trust[i][0]]);
    } else {
      const newValue = hashmapTrust.get(trust[i][1]);
      newValue.push(trust[i][0]);
      hashmapTrust.set(trust[i][1], newValue);
    }

    hashmapPerson.set(trust[i][0], 1);
  }
  let output = -1;
  hashmapTrust.forEach((value, key) => {
    if (value.length === n - 1 && !hashmapPerson.has(key)) {
      output = key;
    }
  });

  return output;
};
