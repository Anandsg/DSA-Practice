var ans = 0;
var pseudoPalindromicPaths = function (root) {
  ans = 0;
  let arr = new Array(10);
  for (let i = 1; i <= 9; i++) arr[i] = 0;
  fun(root, arr, 0);
  return ans;
};

function fun(node, arr, cnt) {
  if (node === null) return;
  arr[node.val]++;
  cnt++;
  if (node.left === null && node.right === null) {
    if (cnt & 1) {
      let f = 1;
      for (let i = 1; i <= 9; i++) {
        if (arr[i] & 1 && f === 0) {
          arr[node.val]--;
          cnt--;
          return;
        } else if (arr[i] & 1) f--;
      }
      ans++;
      cnt--;
      arr[node.val]--;
      return;
    } else {
      for (let i = 1; i <= 9; i++) {
        if (arr[i] & 1) {
          cnt--;
          arr[node.val]--;
          return;
        }
      }
      ans++;
      cnt--;
      arr[node.val]--;
      return;
    }
  }

  fun(node.left, arr, cnt);
  fun(node.right, arr, cnt);
  arr[node.val]--;
  cnt--;
}
