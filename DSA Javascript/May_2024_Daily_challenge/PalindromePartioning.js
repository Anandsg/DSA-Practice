var partition = function (s) {
  let ans = [];

  dfs(0, [], s, ans);

  return ans;
};

function dfs(start, partitions, s, ans) {
  if (start === s.length) {
    ans.push([...partitions]);
    return;
  }

  for (let end = start + 1; end < s.length + 1; end++) {
    let currentSubstring = s.substring(start, end);

    if (isPalindrome(currentSubstring)) {
      partitions.push(currentSubstring);
      dfs(end, partitions, s, ans);
      partitions.pop();
    }
  }
}

function isPalindrome(string) {
  let left = 0;
  let right = string.length - 1;

  while (left < right) {
    if (string.charAt(left) !== string.charAt(right)) {
      return false;
    }
    left++;
    right--;
  }

  return true;
}
