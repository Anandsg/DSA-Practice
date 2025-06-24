var validateBinaryTreeNodes = function (n, leftChild, rightChild) {
    /* Union Find setup. */
    let groups = Array(n);
    for (let i = 0; i < n; i++)
        groups[i] = i;

    const find = function (loc) {
        id = groups[loc]
        if (id == loc)
            return id;   // This is the parent.
        groups[loc] = find(id);
        return groups[loc];
    };
    const union = (eater, eaten) => { groups[eaten] = eater; }

    for (let i = 0; i < n; i++) {
        let p = find(i), pl = -1, pr = -1;
        if (leftChild[i] !== -1) {
            pl = find(leftChild[i]);
            if (pl !== leftChild[i] || pl === p)
                return false;
            union(p, pl);
        }
        if (rightChild[i] !== -1) {
            pr = find(rightChild[i]);
            if (pr !== rightChild[i] || pr === p)
                return false;
            union(p, pr);
        }
    }

    for (let i = 0; i < n; i++)
        find(i);
    let used = new Set(groups);

    return used.size === 1;
};