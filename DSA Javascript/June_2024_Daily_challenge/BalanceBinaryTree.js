var balanceBST = function (root) {
  let arr = [];

  const BST = (root) => {
    if (!root) {
      return null;
    }
    BST(root.left);
    arr.push(root.val);
    BST(root.right);
  };
  BST(root);

  let i = 0;
  let j = arr.length - 1;

  const arrToBST = (arr, i, j) => {
    if (i > j) {
      return null;
    }
    let mid = parseInt((i + j) / 2);
    let root1 = new TreeNode(arr[mid]);
    root1.left = arrToBST(arr, i, mid - 1);
    root1.right = arrToBST(arr, mid + 1, j);
    return root1;
  };
  return arrToBST(arr, i, j);
};
