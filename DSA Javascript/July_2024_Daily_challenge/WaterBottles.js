var numWaterBottles = function (numBottles, numExchange) {
  let cnt = 0;
  cnt += numBottles;
  while (numBottles >= numExchange) {
    let rem = numBottles % numExchange;
    let div = Math.floor(numBottles / numExchange);
    numBottles = div + rem;
    cnt += div;
  }
  return cnt;
};
