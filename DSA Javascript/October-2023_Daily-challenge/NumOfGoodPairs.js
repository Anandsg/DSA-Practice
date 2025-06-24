var numIdenticalPairs = function (nums) {
    let holder = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (holder.has(nums[i])) {
            holder.set(nums[i], holder.get(nums[i]) + 1);
        }
        else {
            holder.set(nums[i], 1);
        }
    }

    let count = 0;
    holder.forEach(function (value, key) {
        let val = value - 1;
        count = count + ((1 + val) / 2 * val);

    })
    return count;

};