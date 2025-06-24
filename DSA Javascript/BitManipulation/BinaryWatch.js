var readBinaryWatch = function(turnedOn) {
    const times = [];
    const countBit = (n) => n ? (n % 2) + countBit(n >> 1) : 0;
    for (let hh = 0; hh < 12; hh++) {
        for (let mm = 0; mm < 60; mm++) {
            if (countBit(hh) + countBit(mm) === turnedOn) {
                times.push(`${hh}:${mm < 10 ? '0' + mm : mm}`);
            }
        }
    }
    return times; 
};