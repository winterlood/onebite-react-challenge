### Quiz 1. 우승자는? 광고 시청하고 오시겠습니다!

---

목표 : 우승자를 긴장감 있게 발표하기 위해 시간을 끌어줄 비동기 함수가 필요합니다.

다음 요구사항을 만족하는 delay 함수를 구현하세요

1.  매개변수 ms로 밀리세컨즈 초를 제공받습니다.
2.  제공받은 ms만큼 대기했다가 resolve를 호출해 비동기 작업을 완료합니다.

- 힌트: Promise를 반환하는 함수는 비동기 함수가 됩니다.
- 힌트: setTimeout을 이용하면 특정 ms 만큼 기다렸다가 코드를 실행할 수 있습니다.

```javascript
function delay(ms) {
  // 여기에 코드를 작성하세요
}

async function main() {
  console.log("3초 후 결과를 공개하겠습니다!");
  await delay(3000);
  console.log("승자는 이정환!");
}

main();
// 출력 결과 :
// 3초 후 결과를 공개하겠습니다!
// 승자는 이정환!
```

[정답보기](https://github.com/winterlood/onebite-react-challenge/blob/main/missions/day07/coding-quiz/quiz1/answer.js)

### Quiz 2. 주문 접수 -> 처리 -> 취소 하기

---

목표: Promise 체이닝을 이용해 여러개의 비동기 함수를 연달아 실행시켜야 합니다.

다음 요구사항을 만족하는 코드를 작성하세요

- 다음 3개의 비동기 함수를 순서대로 연달아 실행시키세요 (함수를 수정해서는 안됩니다)

  1. receiveOrder: 주문을 받는 함수, 첫번째로 호출되어야 합니다.
  2. processOrder: 1번에서 받은 주문을 처리하는 함수, 두번째로 호출되어야 합니다.
  3. cancelOrder: 2번에서 처리가 완료된 주문을 취소하는 함수, 세번째로 호출되어야 합니다.

- 예외 상황을 방지하는 에러 핸들링 코드가 필요합니다.

  - 비동기 작업에서 오류가 발생할 경우 `console.error()` 메서드를 호출해 에러 메세지를 출력합니다.

```javascript
/* 1. 주문하는 기능 (수정 X) */
function receiveOrder() {
  return new Promise((resolve) =>
    setTimeout(() => {
      console.log("주문 접수가 완료되었습니다.");
      resolve("주문번호: 123");
    }, 2000)
  );
}

/* 2. 주문을 처리하는 기능 (수정 X) */
function processOrder(orderId) {
  return new Promise((resolve) =>
    setTimeout(() => {
      console.log(`[${orderId}] 주문이 처리 되었습니다.`);
      resolve(orderId);
    }, 2000)
  );
}

/* 3. 주문을 취소하는 기능 (수정 X) */
function cancelOrder(orderId) {
  return new Promise((resolve) =>
    setTimeout(() => {
      console.log(`[${orderId}] 주문이 취소되었습니다`);
      resolve();
    }, 1500)
  );
}

// 여기에 코드를 작성하세요

// 출력 결과 :
// 주문 접수가 완료되었습니다.
// [주문번호: 123] 주문이 처리 되었습니다.
// [주문번호: 123] 주문이 취소되었습니다
```

[정답보기](https://github.com/winterlood/onebite-react-challenge/blob/main/missions/day07/coding-quiz/quiz2/answer.js)
