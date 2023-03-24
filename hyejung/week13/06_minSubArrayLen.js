/*
Write a function called minSubArrayLen which accepts two parameters - an array of positive integers and a positive integer.

This function should return the minimal length of a contiguous subarray of which the sum is greater than or equal to the integer passed to the function. If there isn't one, return 0 instead.
*/

function minSubArrayLen(nums, sum) {
  let total = 0;
  let start = 0;
  let end = 0;
  let minLen = Infinity;

  while (start < nums.length) {
    // 현재 윈도우가 합계보다 작을 경우 오른쪽으로 이동
    // 고정된 윈도우가 아니고 end 를 옮기면서 하나씩 더해줌
    if (total < sum && end < nums.length) {
      total += nums[end];
      end++;
    }
    // 현재 윈도우가 합계보다 같거나 클 경우
    // 윈도우 크기를 줄일 수 있다.
    else if (total >= sum) {
      // end - start까지가 현재의 윈도우 길이
      minLen = Math.min(minLen, end - start);
      // 이제 줄어들거니까 start를 옮기면서 빼준다.
      total -= nums[start];
      start++;
    }
    // 위 두 경우가 아닌 경우 탈출할 수 있도록 설정
    else {
      break;
    }
  }

  return minLen === Infinity ? 0 : minLen;
}

minSubArrayLen([2, 3, 1, 2, 4, 3], 7); // 2 -> because [4,3] is the smallest subarray
minSubArrayLen([2, 1, 6, 5, 4], 9); // 2 -> because [5,4] is the smallest subarray
minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52); // 1 -> because [62] is greater than 52
minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39); // 3
minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55); // 5
minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11); // 2
minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95); // 0

/*
연속된 숫자로 주어진 숫자 이상의 값을 만들 때, 연속된 요소의 갯수들 중 최솟값을 구해야 함.
만족할 수 없는 경우 0 을 리턴
- 모르겠다.
*/
