### Quiz 1. 배열 분할 및 결합하기

---

목표 : 배열을 반으로 나눈 다음, 순서를 바꿔 다시 결합해야 합니다.

다음 요구사항에 따라 함수 `splitAndCombine을` 완성하세요

함수 `splitAndCombine은` 매개변수로 제공된 배열 `arr을` 반으로 나눈 다음  
분할된 배열을 순서를 바꿔 결합합니다.

1. 반으로 나누기

- arr1: 0~3번 인덱스까지 분할, 결과는 [0,1,2,3]이 되어야 함
- arr2: 4~7번 인덱스까지 분할, 결과는 [4,5,6,7]이 되어야 함

2. 순서를 바꿔 결합하기

- arr2뒤에 arr1을 결합, 결과는 [4,5,6,7,0,1,2,3]이 되어야 함

3. 반환하기

- 결합이 완료된 배열을 반환합니다.

```javascript
function splitAndCombine(arr) {
  // 여기에 코드를 작성하세요 ...
}

let arr = [0, 1, 2, 3, 4, 5, 6, 7];
const result = splitAndCombine(arr);
console.log(result);

// 출력 결과 :
// [4,5,6,7,0,1,2,3]
```

[정답보기](https://github.com/winterlood/onebite-react-challenge/blob/main/missions/day06/coding-quiz/quiz1/answer.js)

### Quiz 2. 클릭 이벤트 로그 처리하기

---

목표: 배열 형태의 이벤트 로그(기록)중 "클릭" 이벤트만 특별한 형태로 출력해야 합니다.

다음 요구사항을 만족하는 `printClickEventLogs` 함수를 완성하세요

1.  매개변수 `logs로` 이벤트 로그 배열을 전달받습니다.
2.  이벤트 로그들 중 `type이` "click"에 해당하는 로그만 특별한 형태로 출력합니다
    - 형태: **`${이벤트아이디}: ${이벤트발생시각}`**
3.  이벤트 발생 시각은 `toLocaleString` 메서드를 사용해 알아보기 쉽게 출력하세요

```javascript
function printClickEventLogs(logs) {
  // 여기에 코드를 작성하세요 ...
}

printClickEventLogs([
  {
    type: "click",
    date: "2023-01-01T12:00:00Z",
  },
  {
    type: "hover",
    date: "2023-01-01T12:10:00Z",
  },
  {
    type: "scroll",
    date: "2023-01-01T12:15:00Z",
  },
  {
    type: "click",
    date: "2023-01-01T12:20:00Z",
  },
]);

// 출력 결과
// click :: 2023. 1. 1. 오후 9:00:00
// click :: 2023. 1. 1. 오후 9:20:00
```

[정답보기](https://github.com/winterlood/onebite-react-challenge/blob/main/missions/day06/coding-quiz/quiz2/answer.js)

### Quiz 3. 카페 할인 이벤트

---

목표: 성공적인 카페 홍보를 위해서 모든 메뉴에 500원씩 할인을 적용하려고 합니다.

다음 요구사항을 만족하는 `getMenusWithDiscountedPrice` 함수를 완성하세요

1.  카페 메뉴 배열인 `menus를` 매개변수로 제공받습니다.
2.  `menus` 배열의 모든 아이템(메뉴)에 기존가(`price`)에서
    500원 할인된 할인가를 저장하는 `discountedPrice를` 추가한 새로운 배열을 만듭니다.
3.  `discountedPrice가` 추가된 새로운 배열을 반환합니다.

```javascript
function getDiscountedMenus(menus) {
  // 여기에 코드를 작성하세요 ...
}

const discountedMenus = getDiscountedMenus([
  { itemId: 1, name: "아메리카노", price: 3000 },
  { itemId: 2, name: "라떼", price: 3500 },
  { itemId: 3, name: "초콜릿 케이크", price: 5000 },
  { itemId: 4, name: "크로와상", price: 2800 },
]);

console.log(discountedMenus);
// 출력 결과 :
// { itemId: 1, name: '아메리카노', price: 3000, discountedPrice: 2500 },
// { itemId: 2, name: '라떼', price: 3500, discountedPrice: 3000 },
// { itemId: 3, name: '초콜릿 케이크', price: 5000, discountedPrice: 4500 },
// { itemId: 4, name: '크로와상', price: 2800, discountedPrice: 2300 }
```

[정답보기](https://github.com/winterlood/onebite-react-challenge/blob/main/missions/day06/coding-quiz/quiz3/answer.js)

### Quiz 4. 도서 정리하기

---

목표: 여러권의 도서를 최근에 출간된 순으로 정렬하려고 합니다.

다음 조건을 만족하는 `getSortedBooks` 함수를 완성하세요

1.  매개변수 `books로` 도서 배열을 제공 받습니다.
2.  `books` 배열을 도서의 출간일(`published`)를 기준으로 내림차순(최신순)으로 정렬합니다
3.  정렬된 배열을 반환합니다.

힌트 : Date 객체간의 비교는 타임스탬프를 이용하면 쉽습니다(`getTime`)  
힌트 : 정렬 함수에는 `sort와` `toSorted가` 있습니다.

```javascript
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
```

[정답보기](https://github.com/winterlood/onebite-react-challenge/blob/main/missions/day06/coding-quiz/quiz4/answer.js)
