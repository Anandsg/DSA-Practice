var decodeAtIndex = function (s, k) {
    let decodedLength = 0;

    for (let i = 0; i < s.length; i++) {
        if (isNaN(s[i])) {
            decodedLength++;
        } else {
            decodedLength *= Number(s[i]);
        }
    }

    // console.log(decodedLength);
    for (let i = s.length - 1; i >= 0; i--) {
        k %= decodedLength;

        if (k === 0 && isNaN(s[i])) {
            return s[i];
        }
        if (isNaN(s[i])) {
            decodedLength--;
        } else {
            decodedLength = Math.ceil(decodedLength / Number(s[i]));
        }
    }
    return null;
}; 