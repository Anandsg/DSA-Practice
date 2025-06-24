var getWinner = function (arr, k) {
    let win = {}; // map to store win-points for each element
    const length = arr.length;
    let max, min;
    for (let i = 0; i < length; i++) {
        max = Math.max(arr[0], arr[1]);
        min = Math.min(arr[0], arr[1]);
        win[max] = win[max] ? win[max] + 1 : 1;
        if (win[max] == k)
            return max;
        arr[length] = min;
        if (arr[1] < arr[0])
            arr[1] = arr[0];
        arr.shift();
    }
    return arr[0];
};