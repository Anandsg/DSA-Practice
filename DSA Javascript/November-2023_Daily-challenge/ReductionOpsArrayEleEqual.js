var reductionOperations = function (nums) {
    let count = 0;
    nums.sort((a, b) => b - a);

    for (i = 0; i < nums.length - 1; i++) {
        const num = nums[i];
        const nextNum = nums[i + 1];

        if (num !== nextNum) {
            count += i + 1;
        }
    }
    return count;
};