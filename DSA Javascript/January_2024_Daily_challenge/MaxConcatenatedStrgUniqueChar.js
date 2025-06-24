function isUnique(str) {
  let temp = str.split("");

  if (str.length == new Set(temp).size) return true;
  else return false;
}

var maxLength = function (arr) {
  let maxlen = 0;

  const recur = (idx, curr) => {
    maxlen = Math.max(maxlen, curr.length);

    for (let i = idx; i < arr.length; i++) {
      isUnique(curr + arr[i]) && recur(i + 1, curr + arr[i]);
    }
  };

  recur(0, "");

  return maxlen;
};
