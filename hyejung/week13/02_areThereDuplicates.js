/*
Frequency Counter / Multiple Pointers - areThereDuplicates
Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in.  You can solve this using the frequency counter pattern OR the multiple pointers pattern.

Examples:

areThereDuplicates(1, 2, 3) // false
areThereDuplicates(1, 2, 2) // true 
areThereDuplicates('a', 'b', 'c', 'a') // true 
Restrictions:

Time - O(n)

Space - O(n)

Bonus:

Time - O(n log n)

Space - O(1)
*/

// 빈도수 세기 방식
function areThereDuplicatesFrequency(...arg) {
  let map = {};
  for (let elem of arg) {
    const key = String(elem);
    map[key] = (map[key] || 0) + 1;
  }

  for (let [key, val] of Object.entries(map)) {
    if (val >= 2) return true;
  }

  return false;
}

// Two pointers
function areThereDuplicatesTwoPointers(...args) {
  // 아래와 같이 정렬하면 문자열이 들어왔을 때 정렬 X
  // args.sort((a, b) => a > b);
  args.sort();

  let start = 0;
  let next = 1;
  while (next < args.length) {
    if (args[start] === args[next]) {
      return true;
    }
    start++;
    next++;
  }
  return false;
}

function areThereDuplicates() {
  // 바보다.. Set을 만들면 되는구나...
  return new Set(arguments).size !== arguments.length;
}

console.log(
  areThereDuplicates(1, 2, 3), // false
  areThereDuplicates(1, 2, 2), // true
  areThereDuplicates('a', 'b', 'c', 'a'), // true
);

/*
Note
어떻게 n log n 시간복잡도 + 상수 공간 복잡도로 해결할 수 있지?
*/
