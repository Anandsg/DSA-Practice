var trap = function (height) {
  const len = height.length;

  const prefixMax = new Array(len);
  const postfixMax = new Array(len);

  for (let i = 0; i < len; i++) {
    if (i === 0) prefixMax[i] = height[i];
    else prefixMax[i] = Math.max(prefixMax[i - 1], height[i]);
  }

  for (let i = len - 1; i >= 0; i--) {
    if (i === len - 1) postfixMax[i] = height[i];
    else postfixMax[i] = Math.max(postfixMax[i + 1], height[i]);
  }

  let trapWater = 0;

  for (let i = len - 1; i >= 0; i--) {
    const min = Math.min(postfixMax[i], prefixMax[i]);
    const diff = min - height[i];
    if (diff > 0) {
      trapWater += diff;
    }
  }

  return trapWater;
};
