var primeSubOperation = function (nums) {
  const n = nums.length;
  for (let i = n - 2; i >= 0; i--) {
    if (nums[i] < nums[i + 1]) {
      continue;
    } else {
      const prime = findPrime(nums[i] - nums[i + 1], nums[i]);
      if (prime === -1) {
        return false;
      }
      nums[i] = nums[i] - prime;
    }
  }
  return true;
};

function findPrime(minVal, maxVal) {
  for (let i = minVal + 1; i < maxVal; i++) {
    if (isPrime(i)) {
      return i;
    }
  }
  return -1;
}

function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++) {
    if (num % i === 0) return false;
  }
  return true;
}
