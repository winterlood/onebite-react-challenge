function printAvgScore(students) {
  for (let name in students) {
    let sum = 0;
    const { scores } = students[name];

    for (let score of scores) {
      sum += score;
    }
    const avg = sum / scores.length;
    console.log(`${name}: ${avg}`);
  }
}

printAvgScore({
  이정환: { hobby: "테니스", scores: [10, 20, 30, 40, 50] },
  김효빈: { hobby: "테니스", scores: [90, 80, 30, 70, 50] },
  홍길동: { hobby: "의적", scores: [100, 100, 20, 20, 50] },
});

// 출력 결과 :
// 이정환: 30
// 김효빈: 64
// 홍길동: 58
