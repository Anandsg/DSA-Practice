var maximumBeauty = function (items, queries) {
  items.sort((a, b) => a[0] - b[0]);
  let maxBeautyAtPrice = [];
  let maxBeauty = 0;

  for (let [price, beauty] of items) {
    maxBeauty = Math.max(maxBeauty, beauty); 
    maxBeautyAtPrice.push([price, maxBeauty]);
  }

  return queries.map((query) => {
    let left = 0,
      right = maxBeautyAtPrice.length - 1;
    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      if (maxBeautyAtPrice[mid][0] <= query) left = mid + 1;
      else right = mid - 1;
    }
    return right >= 0 ? maxBeautyAtPrice[right][1] : 0;
  });
};
