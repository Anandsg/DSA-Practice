var parseBoolExpr = function (expression) {
  const evalExpr = (expr) => {
    if (expr === "t") return true;
    if (expr === "f") return false;

    if (expr[0] === "!") {
      return !evalExpr(expr.slice(2, -1));
    }

    const op = expr[0];
    const subExprs = [];
    let balance = 0;
    let start = 2;

    for (let i = 2; i < expr.length - 1; i++) {
      if (expr[i] === "(") balance++;
      if (expr[i] === ")") balance--;
      if (expr[i] === "," && balance === 0) {
        subExprs.push(expr.slice(start, i));
        start = i + 1;
      }
    }
    subExprs.push(expr.slice(start, expr.length - 1));

    if (op === "&") return subExprs.every(evalExpr);
    if (op === "|") return subExprs.some(evalExpr);
  };

  return evalExpr(expression);
};
