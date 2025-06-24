var isPerfectSquare = function(num) {
    for (let i = 0; i <= num; i++) {
        if (i*i === num) return true;
        if (i*i > num) return false;
    }
};