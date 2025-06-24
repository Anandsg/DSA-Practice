var winnerOfGame = function (colors) {
    let n = colors.length
    let a = 0
    let b = 0
    for (let i = 1; i < n - 1; i++) {
        if (colors[i - 1] == "A" && colors[i] == 'A' && colors[i + 1] == "A") {
            a++
        }
        if (colors[i - 1] == "B" && colors[i] == 'B' && colors[i + 1] == "B") {
            b++
        }
    }
    if (a > b) {
        return true
    } else {
        return false
    }
};
