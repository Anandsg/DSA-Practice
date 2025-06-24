function countOfAtoms(formula) {
  let stack = [{}];
  let i = 0;
  let n = formula.length;

  while (i < n) {
    if (formula[i] === "(") {
      stack.push({});
      i++;
    } else if (formula[i] === ")") {
      let top = stack.pop();
      i++;
      let start = i;
      while (i < n && isDigit(formula[i])) i++;
      let multiplier = start < i ? parseInt(formula.slice(start, i)) : 1;
      for (let [atom, count] of Object.entries(top)) {
        stack[stack.length - 1][atom] =
          (stack[stack.length - 1][atom] || 0) + count * multiplier;
      }
    } else {
      let start = i;
      i++;
      while (i < n && isLowerCase(formula[i])) i++;
      let name = formula.slice(start, i);
      start = i;
      while (i < n && isDigit(formula[i])) i++;
      let count = start < i ? parseInt(formula.slice(start, i)) : 1;
      stack[stack.length - 1][name] =
        (stack[stack.length - 1][name] || 0) + count;
    }
  }

  let atomCount = stack.pop();
  let sortedAtoms = Object.keys(atomCount).sort();
  let result = "";
  for (let atom of sortedAtoms) {
    result += atom + (atomCount[atom] > 1 ? atomCount[atom] : "");
  }

  return result;
}

function isDigit(ch) {
  return ch >= "0" && ch <= "9";
}

function isLowerCase(ch) {
  return ch >= "a" && ch <= "z";
}
