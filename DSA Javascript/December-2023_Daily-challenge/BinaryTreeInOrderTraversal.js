var inorderTraversal = function (root) {
    const result = [];
    helper(root, result);
    return result;
};

function helper(root, result) {
    if (root !== null) {
        helper(root.left, result);
        result.push(root.val);
        helper(root.right, result);
    }
}