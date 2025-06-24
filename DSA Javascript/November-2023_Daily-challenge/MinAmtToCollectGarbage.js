/**
 * @param {string[]} garbage
 * @param {number[]} travel
 * @return {number}
 */
var garbageCollection = function (garbage, travel) {
    const n = garbage.length;
    let ans = 0;

    for (let i = 0; i < n - 1; i++) {
        ans += 3 * travel[i];
    }

    for (const s of garbage) {
        ans += s.length;
    }

    for (let i = n - 1; i > 0; i--) {
        if (!garbage[i].includes("G")) {
            ans -= travel[i - 1];
        } else {
            break;
        }
    }

    for (let i = n - 1; i > 0; i--) {
        if (!garbage[i].includes("P")) {
            ans -= travel[i - 1];
        } else {
            break;
        }
    }

    for (let i = n - 1; i > 0; i--) {
        if (!garbage[i].includes("M")) {
            ans -= travel[i - 1];
        } else {
            break;
        }
    }

    return ans;
};
