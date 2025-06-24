func findCenter(edges [][]int) int {
    n1, n2, n3, n4 := edges[0][0], edges[0][1], edges[1][0], edges[1][1]

    if (n1 == n3) || (n1 == n4) {
        return n1
    } 

    return n2
}