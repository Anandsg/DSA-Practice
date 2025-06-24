var customSortString = function (order, s) {
  let arr = [];
  let ord = order.split("");
  let s1 = s.split("");

  for (let each of ord) {
    if (s1.includes(each)) {
      while (s1.includes(each)) {
        arr.push(each);
        s1.splice(s1.indexOf(each), 1);
      }
    }
  }

  arr.push(...s1);
  return arr.join("");
};
