/**
 * 다음 요구사항을 만족하는 코드를 작성하세요
 *
 * - 변수 a의 저장된 값의 타입을 문자열로 출력하려고 합니다.
 * - switch 조건문과 typeof 연산자를 이용해 코드를 작성하세요
 */

const a = true;

switch (typeof a) {
  case "number": {
    console.log("숫자");
    break;
  }
  case "string": {
    console.log("문자열");
    break;
  }
  case "boolean": {
    console.log("불리언");
    break;
  }
  case "null": {
    console.log("널");
    break;
  }
  case "undefined": {
    console.log("언디파인");
    break;
  }
  case "object": {
    console.log("객체");
    break;
  }
}
