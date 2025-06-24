var intersect = function(nums1, nums2) {
    const counts = {};
    const result = [];

    nums1.forEach(el => counts[el] = ++counts[el] || 1);

    for (let el of nums2) {
        if (counts[el]) {
            result.push(el);
            counts[el]--;
        }
    }

    return result;
};