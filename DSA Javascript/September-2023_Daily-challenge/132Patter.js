var find132pattern = function (nums) {
    let n = nums.length
    let stack = []
    let last = -Number.MAX_VALUE
    for (let i = n - 1; i > -1; i--) {
        let item = nums[i]
        if (item < last) {
            return true
        }
        while (stack && stack[stack.length - 1] < item) {
            last = stack.pop()
        }
        stack.push(item)
    }
    return false
}