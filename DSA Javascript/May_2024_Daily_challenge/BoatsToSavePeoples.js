/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
var numRescueBoats = function (people, limit) {
  if (people.length === 1) return 1;
  // if(people.length === 1 && people[0] > limit)return 0
  let left = 0;
  let right = people.length - 1;
  let countPeople = 0;
  people.sort((a, b) => a - b);
  // console.log(people)
  while (left <= right) {
    if (people[left] + people[right] <= limit) {
      countPeople++;
      left++;
      right--;
    } else if (people[left] + people[right] > limit) {
      right--;
      countPeople++;
    }
  }
  return countPeople;
};
