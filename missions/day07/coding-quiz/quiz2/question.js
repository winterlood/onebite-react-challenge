/* 
[주문 접수 -> 처리 -> 취소 하기]

목표: Promise 체이닝을 이용해 여러개의 비동기 함수를 연달아 실행시켜야 합니다.

다음 요구사항을 만족하는 코드를 작성하세요

- 다음 3개의 비동기 함수를 순서대로 연달아 실행시키세요 (함수를 수정해서는 안됩니다)
  1. receiveOrder: 주문을 받는 함수, 첫번째로 호출되어야 합니다.
  2. processOrder: 1번에서 받은 주문을 처리하는 함수, 두번째로 호출되어야 합니다.
  3. cancelOrder: 2번에서 처리가 완료된 주문을 취소하는 함수, 세번째로 호출되어야 합니다.

- 예외 상황을 방지하는 에러 핸들링 코드가 필요합니다.
  - 비동기 작업에서 오류가 발생할 경우 `console.error()` 메서드를 호출해 에러 메세지를 출력합니다. 
*/

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
