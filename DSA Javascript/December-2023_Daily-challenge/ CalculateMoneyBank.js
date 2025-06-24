var totalMoney = function (n) {
    let x = 1;
    let sum = 0;
    for (let i = 1, k = 1; i <= n; i += 7, k++) {
        for (let j = k; j <= 6 + k; j++) {
            if (x > n) {
                break;
            }
            sum = sum + j;
            x++
        }
    }
    return sum
};