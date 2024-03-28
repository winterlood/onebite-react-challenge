/**
 * [배열 분할 및 결합하기]
 * 목표 : 배열을 반으로 나눈 다음, 순서를 바꿔 다시 결합해야 합니다.
 *
 * 다음 요구사항에 따라 함수 splitAndCombine을 완성하세요
 * 함수 splitAndCombine은 매개변수로 제공된 배열 arr을 반으로 나눈 다음, 분할된 배열을 순서를 바꿔 결합합니다.
 *   1. 반으로 나누기
 *    - arr1: 0~3번 인덱스까지 분할, 결과는 [0,1,2,3]이 되어야 함
 *    - arr2: 4~7번 인덱스까지 분할, 결과는 [4,5,6,7]이 되어야 함
 *   2. 순서를 바꿔 결합하기
 *    - arr2뒤에 arr1을 결합, 결과는 [4,5,6,7,0,1,2,3]이 되어야 함
 *   3. 반환하기
 *    - 결합이 완료된 배열을 반환합니다.
 */

function splitAndCombine(arr) {
  const arr1 = arr.slice(0, 4);
  const arr2 = arr.slice(4, 8);
  return arr2.concat(arr1);

  // Bonus. 이렇게도 가능해요
  // return [...arr2, ...arr1];
}

let arr = [0, 1, 2, 3, 4, 5, 6, 7];
const result = splitAndCombine(arr);
console.log(result);

// 출력 결과 :
// [4,5,6,7,0,1,2,3]
