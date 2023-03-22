/*
Multiple Pointers - isSubsequence

Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.

Your solution MUST have AT LEAST the following complexities:

Time Complexity - O(N + M)

Space Complexity - O(1)
*/

function isSubsequence(str1, str2) {
  let i = 0;
  let j = 0;
  if (!str1) return true;

  // i는 str1 탐색
  // j는 str2 탐색
  while (j < str2.length) {
    // str2에 포함되어있다면 i++
    if (str2[j] === str1[i]) i++;
    // 만약 그렇게 i를 끝까지 다 돌았다면 true를 리턴
    if (i === str1.length) return true;
    // j를 증감해서 str2를 다 탐색
    j++;
  }

  // 여기까지 했는데 true가 리턴되지 않았으면 false
  return false;
}

console.log(
  isSubsequence('hello', 'hello world'), // true
  isSubsequence('sing', 'sting'), // true
  isSubsequence('abc', 'abracadabra'), // true
  isSubsequence('abc', 'acb'), // false (order matters)
);

/*
[문제]
- 오른쪽 문자열이 왼쪽 문자열을 순서에 맞게 포함하는지 여부 체크
- 흠 은근 어렵네...
- 

*/
