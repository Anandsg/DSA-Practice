var buildArray = function (target, n) {
    const result = [];
    let current = 1; // The current number to be pushed

    for (let i = 0; i < target.length; i++) {
        while (current < target[i]) {
            // While the current number is less than the target number,
            // push the current number and generate the "Push" operation.
            result.push("Push");
            result.push("Pop"); // After pushing, immediately pop
            current++;
        }

        // The current number matches the target number, so push it.
        result.push("Push");

        current++; // Move to the next number to be pushed
    }

    return result;
}