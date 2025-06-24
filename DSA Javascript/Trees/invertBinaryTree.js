var invertTree = function (root) {
    if (root != null) {

        [root.left, root.right] = [root.right, root.left];
        invertTree(root.left);
        invertTree(root.right);
        return root;

    } else {
        return null;
    }

};