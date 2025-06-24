func restoreMatrix(rowSum []int, colSum []int) [][]int {
    m, n := len(rowSum), len(colSum)
    
    ans := make([][]int, m)
    for i := range ans {
        ans[i] = make([]int, n)
    }
    
    r, c := 0, 0
    for r < m && c < n {
        if rowSum[r] >= colSum[c] {
            ans[r][c] = colSum[c]
            rowSum[r] -= colSum[c]
            c++
        } else {
            ans[r][c] = rowSum[r]
            colSum[c] -= rowSum[r]
            r++
        }
    } 

    return ans
}