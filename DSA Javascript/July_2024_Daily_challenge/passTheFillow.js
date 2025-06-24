var passThePillow = function (n, time) {
  let forward = true;
  let node = 1;
  while (time) {
    if (forward) {
      time--;
      if (++node == n) {
        forward = false;
      }
    } else {
      time--;
      if (--node == 1) {
        forward = true;
      }
    }
  }
  return node;
};
