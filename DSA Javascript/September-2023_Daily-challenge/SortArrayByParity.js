var sortArrayByParity = function (nums) {
    let j = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 2 == 0) {
            let temp = nums[j];
            nums[j] = nums[i];
            nums[i] = temp;
            j++;
        }
    }
    return nums;
};