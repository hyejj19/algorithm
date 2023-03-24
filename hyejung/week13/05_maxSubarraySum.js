/*
Given an array of integers and a number, write a function called maxSubarraySum, which finds the maximum sum of a subarray with the length of the number passed to the function.

Note that a subarray must consist of consecutive elements from the original array. In the first example below, [100, 200, 300] is a subarray of the original array, but [100, 300] is not.
*/

function maxSubarraySum(arr, n) {
  if (arr.length < n) return null;

  let max = 0;

  for (let i = 0; i < n; i++) {
    max += arr[i];
  }

  let sum = max;
  for (let i = n; i < arr.length; i++) {
    sum += arr[i] - arr[i - n];
    max = Math.max(max, sum);
  }

  return max;
}

maxSubarraySum([100, 200, 300, 400], 2); // 700
maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4); // 39
maxSubarraySum([-3, 4, 0, -2, 6, -1], 2); // 5
maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2); // 5
maxSubarraySum([2, 3], 3); // null

/*
배열 안에서 n개 만큼 연속된 요소의 합 중 가장 큰 값을 구해야함.
- 1부터 n번째 요소까지 더한 합을 구한다.
- arr 을 처음부터 끝까지 반복하면서 최대값을 구한다.
- n 개만큼의 합을 유지할 수 없는 경우 (배열의 끝에 다다른 경우) 종료
*/
