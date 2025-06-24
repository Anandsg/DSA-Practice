var isMonotonic = function (nums) {
    const isMonotone = (fn, nums) => {
        for (let i = 0; i < nums.length; i++) {
            if (fn(nums[i], nums[i + 1])) return false;
        }
        return true;
    }
    return isMonotone((a, b) => a > b, nums) || isMonotone((a, b) => a < b, nums);
};