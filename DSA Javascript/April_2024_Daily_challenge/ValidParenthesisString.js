var checkValidString = function (s) {
  const leftP = [];
  const ast = [];

  for (let i = 0; i < s.length; i++) {
    const curr = s[i];
    if (curr === "(") leftP.push(i);
    if (curr === "*") ast.push(i);
    if (curr === ")") {
      if (leftP.length) leftP.pop();
      else if (ast.length) ast.pop();
      else return false;
    }
  }

  while (leftP.length) {
    const leftPpos = leftP.pop();
    const astPos = ast.pop();
    if (!astPos || astPos < leftPpos) return false;
  }
  return true;
};
