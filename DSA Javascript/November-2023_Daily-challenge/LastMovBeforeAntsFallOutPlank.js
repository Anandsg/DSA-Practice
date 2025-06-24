var getLastMoment = function (n, left, right) {
    let time = 0;
    for (let pos of left) {
        time = Math.max(time, pos);
    }
    for (let pos of right) {
        time = Math.max(time, n - pos);
    }
    return time;
}