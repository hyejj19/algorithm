/*
Multiple Pointers - averagePair
Write a function called averagePair. Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average. There may be more than one pair that matches the average target.

Bonus Constraints:

Time: O(N)

Space: O(1)

*/

function averagePair(arr, target) {
  let lt = 0;
  let rt = arr.length - 1;

  while (lt <= rt) {
    const avg = parseFloat((arr[lt] + arr[rt]) / 2);
    if (avg > target) {
      rt--;
    } else if (avg < target) {
      lt++;
    } else {
      return true;
    }
  }

  return false;
}

console.log(
  averagePair([1, 2, 3], 2.5), // true
  averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8), // true
  averagePair([-1, 0, 3, 4, 5, 6], 4.1), // false
  averagePair([], 4), // false
);

/*
[문제]
- 배열에서 임의의 두 숫자를 더해서 평균을 냈을 때 주어진 평균에 일치하는 경우가 몇이나 되는지 구해야 함.
- 두 개의 포인터를 만든다.
- 각각 첫 번째, 마지막 요소를 가리키도록 한다.
- 포인터가 가리키는 두 숫자를 더해 평균을 낸다.
- 구한 값이 주어진 값보다 작을 경우, 왼쪽 포인터를 오른쪽으로 이동
- 주어진 값보다 클 경우, 오른쪽 포인터를 왼쪽으로 이동
- lt 와 rt 의 값이 역전될 때까지 반복!
*/
