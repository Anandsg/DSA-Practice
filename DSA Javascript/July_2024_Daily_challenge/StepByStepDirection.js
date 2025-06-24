var getDirections = function (root, startValue, destValue) {
  let x,
    y,
    z = 0;
  const Go = (node, route) => {
    if (node.val === startValue) x = [...route];
    if (node.val === destValue) y = [...route];
    if (node.left !== null) route.push("L"), Go(node.left, route), route.pop();
    if (node.right !== null)
      route.push("R"), Go(node.right, route), route.pop();
  };
  Go(root, []);
  while (x[z] && x[z] === y[z]) z++;
  return "U".repeat(x.length - z) + y.join("").slice(z);
};
