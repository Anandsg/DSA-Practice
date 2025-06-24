var reverseBits = function (n) {
    let result = 0b0;
    let current = n;

    for (let i = 0; i < 32; i++) {
        let lastBit = current & 0b1;
        result = result << 1;
        result = result | lastBit;
        current = current >> 1;
    }

    return result >>> 0;
}