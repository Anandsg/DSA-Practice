var minOperations = function (nums, x) {
    const target = nums.reduce((acc, curr) => acc + curr, 0) - x
    let max = -1
    let currentSum = 0
    for (let right = 0, left = 0; right < nums.length; right++) {
        currentSum += nums[right]
        while (currentSum > target) currentSum -= nums[left++]
        if (currentSum === target) max = Math.max(max, right - left + 1)
    }
    return max !== -1 ? nums.length - max : -1
};
