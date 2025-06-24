
var largestValues = function (root) {
    const res = [];

    if (!root) {
        return res;
    }

    const q = [];
    q.push(root);

    while (q.length > 0) {
        let max_val = Number.NEGATIVE_INFINITY;
        const levelSize = q.length;

        for (let i = 0; i < levelSize; i++) {
            const node = q.shift();
            max_val = Math.max(max_val, node.val);

            if (node.left) {
                q.push(node.left);
            }

            if (node.right) {
                q.push(node.right);
            }
        }

        res.push(max_val);
    }

    return res;
};