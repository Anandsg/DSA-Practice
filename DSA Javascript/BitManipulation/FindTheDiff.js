var findTheDifference = function(s, t) {
    for (let letter of s)
        t = t.replace(letter, '');
    return t;
};