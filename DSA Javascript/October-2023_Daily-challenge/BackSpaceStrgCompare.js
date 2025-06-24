var backspaceCompare = function (s, t) {
    // Helper function to find the next valid character given a position and string
    function getNextValidChar(s, index) {
        let backspaceCount = 0;

        // Traverse the string backward, counting backspaces and skipping characters
        while (index >= 0) {
            if (s[index] === '#') {
                backspaceCount++;
                index--;
            } else if (backspaceCount > 0) {
                backspaceCount--;
                index--;
            } else {
                break;
            }
        }

        return index;
    }

    let i = s.length - 1;  // Start from the end of s
    let j = t.length - 1;  // Start from the end of t

    while (i >= 0 || j >= 0) {
        // Find the next valid characters in both strings
        i = getNextValidChar(s, i);
        j = getNextValidChar(t, j);

        // If one string has characters remaining and the other doesn't, they are not equal
        if ((i >= 0 && j < 0) || (i < 0 && j >= 0)) {
            return false;
        }

        // Compare the characters at the current positions
        if (s[i] !== t[j]) {
            return false;
        }

        // Move to the previous character in both strings
        i--;
        j--;
    }

    // Both strings are equal after processing backspaces
    return true;
}