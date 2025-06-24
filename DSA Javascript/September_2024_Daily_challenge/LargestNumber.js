var largestNumber = function (nums) {
  nums.sort((a, b) => {
    let order1 = `${a}${b}`; // order of a followed by b
    let order2 = `${b}${a}`; // order of b followed by a
    return order2.localeCompare(order1);
  });

  // Edge case handling for all zeros
  if (nums[0] === 0) {
    return "0";
  }

  return nums.join("");
};
