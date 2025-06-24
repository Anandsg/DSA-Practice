var reverseWords = function (s) {
    let lastSpaceIndex = -1;
    let word = s.split('');

    for (let i = 0; i <= s.length; i++) {
        if (i == s.length || word[i] == ' ') {
            let leftIndex = lastSpaceIndex + 1;
            let rightIndex = i - 1;
            while (leftIndex < rightIndex) {
                let temp = word[leftIndex];
                word[leftIndex] = word[rightIndex];
                word[rightIndex] = temp;
                rightIndex--;
                leftIndex++;
            }
            lastSpaceIndex = i;
        }
    }
    return word.join('');
};