var fairCandySwap = function(aliceSizes, bobSizes) {
    const totalAliceSize = aliceSizes.reduce((prev, current) => prev + current, 0);
    const totalBobSize = bobSizes.reduce((prev, current) => prev + current, 0);
    
    const resolve = (array1, array2, difference) => {
        const hashmap = new Map();
        for (let i = 0; i < array1.length; i++) {
            hashmap.set(array1[i], i);
        }
        
        for (let i = 0; i < array2.length; i++) {
            if (hashmap.has(array2[i] + difference/2)) return [array2[i] + difference/2, array2[i]];
        }
    }
    
    return resolve(aliceSizes, bobSizes, totalAliceSize - totalBobSize);
};