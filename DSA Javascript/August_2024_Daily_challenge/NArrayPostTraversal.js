var postorder = function (root) {
  if (!root) {
    return [];
  }
  let stack = [root],
    res = [];
  while (stack.length > 0) {
    let current = stack.pop();
    res.push(current.val);

    for (const element of current.children) {
      stack.push(element);
    }
  }
  return res.reverse();
};
