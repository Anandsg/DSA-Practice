var maximumElementAfterDecrementingAndRearranging = function (arr) {
    arr.sort((a, b) => a - b);
    let maxVal = 1;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > maxVal) {
            maxVal += 1;
        }
    }

    return maxVal;
};