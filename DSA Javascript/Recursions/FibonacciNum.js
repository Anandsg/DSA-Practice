var fib = function (n) {
    if (n <= 1) {
        return n;
    }
    let fib_array = new Array(n + 1).fill(0);
    fib_array[1] = 1;
    for (let i = 2; i <= n; i++) {
        fib_array[i] = fib_array[i - 1] + fib_array[i - 2];
    }
    return fib_array[n];
};