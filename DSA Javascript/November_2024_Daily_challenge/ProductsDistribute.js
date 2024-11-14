var minimizedMaximum = function (n, quantities) {
  const canDistribute = (maxProductsPerStore) => {
    let storesNeeded = 0;
    for (let qty of quantities) {
      storesNeeded += Math.ceil(qty / maxProductsPerStore);
      if (storesNeeded > n) return false;
    }
    return true;
  };

  let left = 1,
    right = Math.max(...quantities);
  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    if (canDistribute(mid)) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return left;
};
