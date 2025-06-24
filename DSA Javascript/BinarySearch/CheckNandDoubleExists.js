var checkIfExist = function(arr) {
    const hashmapEven = new Map();
    const hashmapOdd = new Map();
    
    for (let i = 0; i < arr.length; i++) {
        const item = arr[i];
        if (item % 2) {
            if (hashmapEven.has(item*2)) return true;
            hashmapOdd.set(item, 1);
        } else {
            if (hashmapOdd.has(item/2) || hashmapEven.has(item/2) || hashmapEven.has(item*2)) return true;
            hashmapEven.set(item, 1);
        }
    }
    return false;
};