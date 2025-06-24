var removeDuplicateLetters = function (s) {
    const stack = [];
    const seen = {};
    const occurrence = {};
    for (let j = 0; j < s.length; j++) {
        occurrence[s[j]] = j;
    }
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (seen[char]) {
            continue;
        }
        while (stack.length > 0 && stack[stack.length - 1] > char && occurrence[stack[stack.length - 1]] > i) {
            const temp = stack.pop();
            seen[temp] = false;
        }
        seen[char] = true;
        stack.push(char);
    }

    return stack.join('');
};