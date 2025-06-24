var minBitFlips = function (start, goal) {
  return (start ^ goal).toString(2).split("1").length - 1;
};
