var minRemoveToMakeValid = function (s) {
  let res = s.slice(0, s.length);
  const stack = [];

  for (let i = 0; i < res.length; i++) {
    if (!stack.length && res.charAt(i) === ")") {
      res = res.slice(0, i) + res.slice(i + 1, res.length);
      i--;
    } else if (res.charAt(i) === ")") {
      stack.pop();
    } else if (res.charAt(i) === "(") {
      stack.push(i);
    }
  }

  while (stack.length) {
    let pos = stack.pop();
    res = res.slice(0, pos) + res.slice(pos + 1, res.length);
  }

  return res;
};
