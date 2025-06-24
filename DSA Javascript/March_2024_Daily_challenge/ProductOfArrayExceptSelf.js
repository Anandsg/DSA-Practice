var productExceptSelf = function (nums) {
  const answer = new Array(nums.length).fill(1);

  let product = 1;
  for (let i = 0; i < nums.length; i++) {
    answer[i] *= product;
    product *= nums[i];
  }

  product = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    answer[i] *= product;
    product *= nums[i];
  }
  return answer;
};
