var maxWidthRamp = function (nums) {
  let stack = [];
  let maxWidth = 0;

  for (let i = 0; i < nums.length; i++) {
    if (stack.length === 0 || nums[stack[stack.length - 1]] > nums[i]) {
      stack.push(i);
    }
  }

  for (let j = nums.length - 1; j >= 0; j--) {
    while (stack.length && nums[stack[stack.length - 1]] <= nums[j]) {
      maxWidth = Math.max(maxWidth, j - stack.pop());
    }
  }

  return maxWidth;
};
