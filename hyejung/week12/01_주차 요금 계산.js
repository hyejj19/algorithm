/*
[PGS] 주차 요금 계산 /LV.2 / 60분
*/

/*
[문제]
주차장의 요금표, 출차 기록이 주어질 때 차량별 주차 요금 계산
- 요금표
기본 시간, 기본 요금, 단위 시간, 단위 요금
- 자동차별 주차 요금
기본 요금 + ((누적 시간 - 기본 시간) / 단위 시간) * 단위 요금 => 전체 요금

[제한]
1. 어떤 차량이 입차된 후 출차 내역이 없다면, 23시 59분에 출차로 간주 
2. 00:00 ~ 23:59 까지의 입출차 내역 바탕으로, 요금 일괄 정산
3. 누적 주차시간 기본 이하일 경우 기본 요금
4. 초과할 경우 기본요금 + 추가 시간에 대해 단위 요금 청구
- 초과한 시간이 나누어 떨어지지 않는 경우 올림. 

주차요금 fees, 입출차기록 records
차량 번호가 작은 자동차부터, 주차요금을 차례로 배열에 담에 리턴

[접근]
1. fees 배열은 구조분해할당하여 정리
2. 차량 번호를 기준으로 입차, 출차 시간을 정리해 총 주차 시간을 구해야 한다. 
- records 배열을 반복한다. 
- 차량번호를 key로 하여 객체를 만든다.
- key : {in: 00:00, total: 0}
- in인 경우 in에 시간을 업데이트
- out인 경우 out과 in 의 시간차를 계산해 total을 업데이트
3. 이렇게 구해진 total 에 계산 로직을 적용해 리턴.
- records 객체를 하나씩 반복
- in 시간이 존재하는 경우 23:59 까지의 시간으로 계산해버림.

* 시간차는 어떻게 계산할 수 있을까? 
1. 24시간제로 되어있기 때문에 이 시,분을 분 단위로 변경해서 토탈 시간을 구할 수 있을 것 같다. 
*/

function solution(fees, records) {
  const answer = [];
  const [basicTime, basicRate, unitTime, unitRate] = fees;
  const carRecords = {};

  records.forEach(rec => {
    const [time, num, act] = rec.split(' ');
    // IN 일 경우 객체에 시간 기록
    if (act === 'IN') {
      carRecords[num] = {...carRecords[num], [act]: time};
    }
    // OUT 일 경우 현재까지의 주차 시간 계산
    else {
      const inTime = changeTimeToNum(carRecords[num]['IN']);
      const outTime = changeTimeToNum(time);
      const prevTot = carRecords[num]['TOTAL'];
      const nowTot = outTime - inTime;
      const TOTAL = prevTot ? prevTot + nowTot : nowTot;
      carRecords[num] = {IN: '', TOTAL};
    }
  });

  // 객체 키 값 순으로 정렬
  const sortedCarRecords = Object.entries(carRecords).sort(
    ([keyA], [keyB]) => keyA - keyB,
  );

  // total 값 계산
  for (let [_, val] of sortedCarRecords) {
    if (val['IN']) {
      const inTime = changeTimeToNum(val['IN']);
      const outTime = changeTimeToNum('23:59');
      const prevTot = val['TOTAL'];
      const nowTot = outTime - inTime;
      val['TOTAL'] = prevTot ? prevTot + nowTot : nowTot;
      val['IN'] = '';
    }
  }

  sortedCarRecords.forEach(rec => {
    const total = rec[1]['TOTAL'];
    if (total <= basicTime) {
      answer.push(basicRate);
    } else {
      const fee =
        basicRate + Math.ceil((total - basicTime) / unitTime) * unitRate;
      answer.push(fee);
    }
  });

  return answer;
}

function changeTimeToNum(time) {
  const [h, m] = time.split(':').map(v => +v);
  return h * 60 + m;
}

console.log(solution([1, 461, 1, 10], ['00:00 1234 IN']));

/*
테스트 1 〉	통과 (0.39ms, 33.4MB)
테스트 2 〉	통과 (0.24ms, 33.4MB)
테스트 3 〉	통과 (0.45ms, 33.5MB)
테스트 4 〉	통과 (0.58ms, 33.5MB)
테스트 5 〉	통과 (1.03ms, 33.5MB)
테스트 6 〉	통과 (1.01ms, 33.5MB)
테스트 7 〉	통과 (4.39ms, 34.8MB)
테스트 8 〉	통과 (2.63ms, 34.2MB)
테스트 9 〉	통과 (0.99ms, 33.6MB)
테스트 10 〉	통과 (6.62ms, 34.6MB)
테스트 11 〉	통과 (4.87ms, 34.8MB)
테스트 12 〉	통과 (5.10ms, 35MB)
테스트 13 〉	통과 (0.30ms, 33.5MB)
테스트 14 〉	통과 (0.27ms, 33.4MB)
테스트 15 〉	통과 (0.22ms, 33.5MB)
테스트 16 〉	통과 (0.23ms, 33.5MB)
*/

// 다른 사람의 풀이
function ref(fees, records) {
  const parkingTime = {};
  records.forEach(r => {
    let [time, id, type] = r.split(' ');
    let [h, m] = time.split(':');
    time = h * 1 * 60 + m * 1;
    if (!parkingTime[id]) parkingTime[id] = 0;
    if (type === 'IN') parkingTime[id] += 1439 - time;
    if (type === 'OUT') parkingTime[id] -= 1439 - time;
  });
  const answer = [];
  for (let [car, time] of Object.entries(parkingTime)) {
    if (time <= fees[0]) time = fees[1];
    else time = Math.ceil((time - fees[0]) / fees[2]) * fees[3] + fees[1];
    answer.push([car, time]);
  }
  return answer.sort((a, b) => a[0] - b[0]).map(v => v[1]);
}
