/**
 * [최신순으로 도서 정렬하기]
 * 목표: 여러권의 도서를 최근에 출간된 순으로 정렬하려고 합니다.
 *
 * 다음 조건을 만족하는 getSortedBooks 함수를 완성하세요
 *   1. 매개변수 books로 도서 배열을 제공 받습니다.
 *   2. books 배열을 도서의 출간일(published)를 기준으로 내림차순(최신순)으로 정렬합니다
 *   3. 정렬된 배열을 반환합니다.
 *
 * 힌트 : Date 객체간의 비교는 타임스탬프를 이용하면 쉽습니다(getTime)
 * 힌트 : 정렬 함수에는 sort와 toSorted가 있습니다.
 */

function getSortedBooks(books) {
  // 여기에 코드를 작성하세요 ...
}

const sortedBooks = getSortedBooks([
  {
    title: "한입 리액트",
    published: new Date("2023. 04. 06"),
  },
  {
    title: "웹 프론트엔드 첫 걸음",
    published: new Date("2024. 04. 30"),
  },
  {
    title: "이펙티브 타입스크립트",
    published: new Date("2021. 06. 27"),
  },
  {
    title: "클린코드",
    published: new Date("2013. 12. 24"),
  },
]);

console.log(sortedBooks);
// 출력 결과 :
// { title: '웹 프론트엔드 첫 걸음', published: 2024-04-29T15:00:00.000Z},
// { title: '한입 리액트', published: 2023-04-05T15:00:00.000Z },
// { title: '이펙티브 타입스크립트', published: 2021-06-26T15:00:00.000Z},
// { title: '클린코드', published: 2013-12-23T15:00:00.000Z }
