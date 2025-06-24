var minPairSum = function (nums) {
    let max = 0
    nums.sort((a, b) => a - b)

    for (let i = 0, sum; i < nums.length / 2; i++) {
        sum = nums[i] + nums[nums.length - 1 - i]
        if (sum > max) max = sum
    }

    return max
};