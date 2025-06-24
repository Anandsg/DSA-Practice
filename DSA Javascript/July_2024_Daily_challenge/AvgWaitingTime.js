var averageWaitingTime = function (customers) {
  let waittime = 0;
  let i = 0;
  let time;
  let timefinish = 0;
  while (i < customers.length) {
    let time = customers[i][1];
    if (timefinish > customers[i][0]) {
      arrival = timefinish;
    } else arrival = customers[i][0];
    timefinish = arrival + time;
    waittime += timefinish - customers[i][0];

    i++;
  }
  return waittime / customers.length;
};
