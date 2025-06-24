var sortByBits = function (arr) {
    return arr.sort((a, b) => {
        let countA = a.toString(2).split('').filter(bit => bit === '1').length;
        let countB = b.toString(2).split('').filter(bit => bit === '1').length;
        return countA - countB || a - b;
    });
};