var inorderTraversal = function(root) {
    const stack = [];
    const res = [];
  
    while (root || stack.length) {
      if (root) {
        stack.push(root);
        root = root.left;
      } else {
        root = stack.pop();
        res.push(root.val);
        root = root.right;
      }
    }
  
    return res;
  }