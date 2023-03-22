/*
Frequency Counter - sameFrequency
Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

Your solution MUST have the following complexities:

Time: O(N)

*/

function sameFrequency(num1, num2) {
  num1 = String(num1);
  num2 = String(num2);

  if (num1.length !== num2.length) return false;

  let map1 = {};
  let map2 = {};

  for (let i = 0; i < num1.length; i++) {
    map1[num1[i]] = (map1[num1[i]] || 0) + 1;
    map2[num2[i]] = (map2[num2[i]] || 0) + 1;
  }

  for (let key of Object.keys(map1)) {
    if (map1[key] !== map2[key] || !map2[key]) return false;
  }

  return true;
}

console.log(
  sameFrequency(182, 281), // true
  sameFrequency(34, 14), // false
  sameFrequency(3589578, 5879385), // true
  sameFrequency(22, 222), // false
);
