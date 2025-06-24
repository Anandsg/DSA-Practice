var lemonadeChange = function (bills) {
  let five = 0;
  let ten = 0;

  for (let bill of bills) {
    switch (bill) {
      case 5:
        five++;
        break;

      case 10:
        if (five === 0) return false;
        ten++;
        five--;
        break;

      default:
        let change = 15;
        if (ten > 0) {
          ten--;
          change -= 10;
        }

        five -= change / 5;
        if (five < 0) return false;
    }
  }

  return true;
};
