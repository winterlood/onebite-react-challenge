// 1. 구조 분해 할당을 이용해 매개변수 제공받기
function printMovieReview({ title, releaseYear, reviewers }) {
  // 2. 영화 제목 출력하기 ex) "제목 : {제목}"
  console.log(`제목 : ${title}`);

  // 3. 개봉 연도 출력하기 ex) "개봉 : {개봉연도}"
  console.log(`개봉 : ${releaseYear}`);

  // 4. 구조 분해 할당을 이용해 첫번째 리뷰어 출력하기(리뷰어가 없다면 "리뷰어 미정" 출력)
  const [firstReviewer = "리뷰어 미정"] = reviewers;
  console.log(`첫 번째 리뷰어 : ${firstReviewer}`);
}

printMovieReview({
  title: "오펜하이머",
  releaseYear: 2023,
  reviewers: ["이정환", "김효빈", "김고은"],
});

// 출력 결과 :
// 제목 : 오펜하이머
// 개봉 : 2023
// 첫 번째 리뷰어 : 이정환

printMovieReview({
  title: "웡카",
  releaseYear: 2024,
  reviewers: [],
});

// 출력 결과 :
// 제목 : 웡카
// 개봉 : 2024
// 첫 번째 리뷰어 : 리뷰어 미정
