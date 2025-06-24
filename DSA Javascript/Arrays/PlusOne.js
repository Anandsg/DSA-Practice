/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    const num = BigInt(digits.join('')) + 1n;
    const numToString = num.toString();

    let arr = [];

    for(let i = 0; i < numToString.length; i++){
        const num = parseInt(numToString[i]);
        arr.push(num);
    } 
    return arr;
};