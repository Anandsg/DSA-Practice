var eliminateMaximum = function (dist, speed) {
    const n = dist.length;
    const time_to_city = dist.map((d, i) => d / speed[i]);

    time_to_city.sort((a, b) => a - b);

    for (let i = 0; i < n; i++) {
        if (time_to_city[i] <= i) {
            return i;
        }
    }

    return n;
}