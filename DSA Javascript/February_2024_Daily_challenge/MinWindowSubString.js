var minWindow = function (s, t) {
  let targetFreq = new Map();
  let windowFreq = new Map();

  for (let char of t) {
    targetFreq.set(char, (targetFreq.get(char) || 0) + 1);
  }

  let left = 0,
    right = 0,
    minLength = Infinity,
    minLeft = 0,
    requiredChars = targetFreq.size;

  while (right < s.length) {
    let currentChar = s[right];

    windowFreq.set(currentChar, (windowFreq.get(currentChar) || 0) + 1);

    if (
      targetFreq.has(currentChar) &&
      windowFreq.get(currentChar) === targetFreq.get(currentChar)
    ) {
      requiredChars--;
    }

    while (requiredChars === 0) {
      if (right - left + 1 < minLength) {
        minLength = right - left + 1;
        minLeft = left;
      }

      let leftChar = s[left];
      windowFreq.set(leftChar, windowFreq.get(leftChar) - 1);

      if (
        targetFreq.has(leftChar) &&
        windowFreq.get(leftChar) < targetFreq.get(leftChar)
      ) {
        requiredChars++;
      }

      left++;
    }

    right++;
  }

  if (minLength === Infinity) {
    return "";
  }

  return s.substr(minLeft, minLength);
};
