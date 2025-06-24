var minimumLength = function (s) {
  let n = s.length;
  let left = 0;
  let right = n - 1;

  while (left < right && s.charAt(left) == s.charAt(right)) {
    let tmp = s.charAt(left);
    while (left <= right && s.charAt(left) == tmp) {
      left++;
    }
    while (left <= right && s.charAt(right) == tmp) {
      right--;
    }
  }

  return right - left + 1;
};
