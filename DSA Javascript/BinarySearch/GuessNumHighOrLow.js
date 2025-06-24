var guessNumber = function(n) {
    var low = 1;
    var high = n;
    while (low <= high) {
        var mid = Math.ceil(low + (high - low) / 2);
        var res = guess(mid)
        if (res == 0) return mid;
        else if (res < 0) high = mid - 1;
        else low = mid + 1;
    }
    return -1;
};