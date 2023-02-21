/*
[PGS] 할인 행사 /LV.2 / 60분
*/

/*
[문제]
xyz 마트, 일정 금액, 10일동안 회원 자격
회원 대상 매일 한 가지 제품 할인 행사
하루에 하나 씩만 구매
자신이 원하는 제품과 수량이 할인하는 날짜와 10일 연속으로 일치할 경우에 맞춰 회원 가입

원하는 제품 문자열 want, 제품 수량 number, 할인 품목 discount

원하는 제품 모두 할인 가능한 회원 등록 날짜의 총 일수를 완성
없으면 0을 리턴

[접근]
- 10일동안 할인 가능
- 첫째날부터 쭉 돌면서 10일까지 봤을 때 그 안에서 해당하는 품목을 전부 다 살 수 있으면 카운트 +1
- 큐를 사용하자!
- 먼저 0부터 9까지 추가하여 배열을 생성
- 10부터 배열에 하나 추가하고, 하나 빼는 식으로 계산 
- 거기서 map을 만들었을 때 일치하는 수량만큼 다 존재하는지 확인
*/

function solution(want, number, discount) {
  let answer = 0;
  const listMap = discount.slice(0, 10).reduce((acc, cur) => {
    acc[cur] = (acc[cur] || 0) + 1;
    return acc;
  }, {});

  let rear = 10;
  for (let i = 0; i < discount.length; i++) {
    let flag = true;

    for (let j = 0; j < want.length; j++) {
      const curItem = want[j];
      if (listMap[curItem] < number[j] || !listMap[curItem]) {
        flag = false;
        break;
      }
    }

    if (flag) answer++;

    const frontItem = discount[i];
    const rearItem = discount[rear];

    // discount[i]에 대한 품목이 있을 경우 --
    if (listMap[frontItem]) listMap[frontItem]--;
    // discount[rear]가 존재하는경우 품목에 추가
    if (rearItem) listMap[rearItem] = (listMap[rearItem] || 0) + 1;

    rear++;
  }

  return answer;
}

console.log(
  solution(
    ['apple'],
    [10],
    [
      'banana',
      'banana',
      'banana',
      'banana',
      'banana',
      'banana',
      'banana',
      'banana',
      'banana',
      'banana',
    ],
  ),
);

/*
테스트 1 〉	통과 (4.28ms, 37MB)
테스트 2 〉	통과 (11.92ms, 39.9MB)
테스트 3 〉	통과 (4.64ms, 37.2MB)
테스트 4 〉	통과 (9.38ms, 38.2MB)
테스트 5 〉	통과 (11.69ms, 38.8MB)
테스트 6 〉	통과 (4.87ms, 36.8MB)
테스트 7 〉	통과 (9.45ms, 37.4MB)
테스트 8 〉	통과 (12.57ms, 39.7MB)
테스트 9 〉	통과 (7.82ms, 37.3MB)
테스트 10 〉	통과 (8.87ms, 39.2MB)
테스트 11 〉	통과 (4.65ms, 37.1MB)
테스트 12 〉	통과 (0.09ms, 33.4MB)
*/
