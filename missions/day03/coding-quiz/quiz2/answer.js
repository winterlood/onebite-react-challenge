/**
 * 다음 요구사항을 만족하는 isPrimeNumber함수를 완성하세요
 *
 * - 함수 isPrimeNumber는 한개의 매개변수 num을 제공받아 소수인지 판별합니다/
 * - num이 소수라면 true를, 아니라면 false를 반환합니다.
 */

function isPrimeNumber(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(isPrimeNumber(1));
console.log(isPrimeNumber(4));
console.log(isPrimeNumber(11));
console.log(isPrimeNumber(12));

// 출력 결과 :
// true
// false
// true
// false
