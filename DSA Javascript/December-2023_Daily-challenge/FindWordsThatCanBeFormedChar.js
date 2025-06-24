/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function (words, chars) {
    let count = 0, m1 = new Map(), m2 = new Map(), charlen = chars.length, wordlen = words.length;

    // store count of each character of chars in two maps
    for (let i = 0; i < charlen; i++) {
        if (!m1.has(chars.at(i))) {
            m1.set(chars.at(i), 1)
            m2.set(chars.at(i), 1)
        }
        else if (m1.has(chars.at(i))) {
            m1.set(chars[i], m1.get(chars.at(i)) + 1);
            m2.set(chars[i], m2.get(chars.at(i)) + 1);
        }
    }

    // check words
    for (let i = 0; i < wordlen; i++) {

        let specificWord = words[i], specificWordLen = words[i].length;
        for (let j = 0; j < specificWordLen; j++) {

            if (!m1.has(specificWord.at(j)) || m1.get(specificWord.at(j)) <= 0) {
                break;
            }
            else {
                // If a character is present in the map, decrease its count    
                m1.set(specificWord.at(j), m1.get(specificWord.at(j)) - 1)

                // If we reach the last character, add its length
                if (j == specificWordLen - 1)
                    count = count + specificWordLen;

            }
        }
        // once we move on to the next word, reset the map
        m1 = new Map(m2);

    }

    return count;
};