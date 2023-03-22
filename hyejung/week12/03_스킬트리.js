/*
[문제]

어떤 스킬을 배우기 전 먼저 배워야 함.
스킬순서에 없는 스킬은 순서 상관 없음
선행 스킬 순서와 유저의 스킬트리가 들어올 때 가능한 스킬트리의 갯수

skill이 CBD 면 각 스킬트리에 CBD 순서대로 있어야함.

[접근]
1. 스킬트리를 하나씩 반복
2. 스킬을 가지고 스킬트리의 아이템 인덱스를 찾는다
3. 인덱스가 CBD => C < B < D 의 조건에 부합하는 경우 O
*/

function solution(skill, skill_trees) {
  let answer = 0;

  const skillItem = skill.split('');

  skill_trees.forEach(item => {
    const index = skillItem.map(i => item.indexOf(i));
    console.log(index);
    let flag = false;
    for (let i = 0; i < index.length; i++) {
      const curVal = index[i];
      if (curVal === -1) break;
      if (index[i - 1] && curVal < index[i - 1]) break;
      flag = true;
    }
    if (flag) answer++;
  });
  return answer;
}

console.log(solution('CBD', ['BACDE', 'CBADF', 'AECB', 'BDA'], 2));
