var longestDiverseString = function (a, b, c) {
  // Array to store characters with their remaining counts
  let chars = [
    { char: "a", count: a },
    { char: "b", count: b },
    { char: "c", count: c },
  ];

  let result = "";

  // Function to sort characters based on their counts (descending)
  const sortChars = () => {
    chars.sort((x, y) => y.count - x.count);
  };

  while (true) {
    sortChars(); // Sort the characters by remaining count

    let appended = false;

    // Try to append the character with the highest count
    for (let i = 0; i < 3; i++) {
      if (chars[i].count === 0) continue; // No characters left to append

      let len = result.length;
      // Check if appending would cause three consecutive characters
      if (
        len >= 2 &&
        result[len - 1] === chars[i].char &&
        result[len - 2] === chars[i].char
      ) {
        continue; // Skip this character if it would form a triplet
      }

      // Append the character and reduce its count
      result += chars[i].char;
      chars[i].count--;
      appended = true;
      break;
    }

    // If no character was appended, break the loop (we can't append more)
    if (!appended) break;
  }

  return result;
};
