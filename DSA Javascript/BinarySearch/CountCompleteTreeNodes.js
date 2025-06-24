var countNodes = function(root) {
    let count = 0;
    root && traverse(root);
    return count;
    
    function traverse(node) {
        count += 1;
        node.left && traverse(node.left);
        node.right && traverse(node.right);
    };
};