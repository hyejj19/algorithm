/*
Write a function called findLongestSubstring, which accepts a string and returns the length of the longest substring with all distinct characters.
*/

function findLongestSubstringalt(str) {
  let map = {};

  let start = 0;
  let end = 0;
  let maxLen = 0;

  while (start < str.length && end < str.length) {
    const key = str[end];

    // key 값이 없는 경우 추가하고 end 증가
    if (!map[key]) {
      map[key] = 1;
      end++;
      maxLen = Math.max(maxLen, end - start);
    }
    // key 값이 있는 경우 start 빼고 map 에서도 제거
    else if (map[key]) {
      map[str[start]]--;
      start++;
    } else {
      break;
    }
  }

  return maxLen;
}

function findLongestSubstring(str) {
  let longest = 0;
  let seen = {};
  let start = 0;

  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    if (seen[char]) {
      start = Math.max(start, seen[char]);
    }

    longest = Math.max(longest, i - start + 1);
    seen[char] = i + 1;

    console.log('seen:', seen, 'start:', start, 'current:', i + 1);
  }

  return longest;
}

console.log(
  //   findLongestSubstring(''), // 0
  //   findLongestSubstring('rithmschool'), // 7
  //   findLongestSubstring('thisisawesome'), // 6
  //   findLongestSubstring('thecatinthehat'), // 7
  //   findLongestSubstring('bbbbbb'), // 1
  //   findLongestSubstring('longestsubstring'), // 8
  //   findLongestSubstring('thisishowwedoit'), // 6
  findLongestSubstring('abcdabd'), // 4
);

/*
중복되지 않은 문자로 이루어지지 않은 문자열 중 가장 긴 길이 구하기
- 배열 처음부터 탐색
- 윈도우를 만드는데 새로운 요소를 추가할 때마다 매 번 기존에 있는 요소인지를 검사해주어야하는가? 그러면 O(n^2) 인데..
- 그러면 해시 맵을 만든다? 매번 문자열을 가지고 해시맵을 만든다. key 값을 조회했을 때 존재하면 중복되어 있으므로 길이를 체크하고 다시 셈
*/
