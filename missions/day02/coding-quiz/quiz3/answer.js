/**
 * 다음 요구사항을 만족하는 코드를 작성하세요
 *
 * 주어진 온도에 따라 다음 메세지를 콘솔에 출력하세요
 * - 온도가 0°C보다 낮으면 "매우 추움"를 출력합니다.
 * - 온도가 0°C 이상 10°C 미만이면 "추움."를 출력합니다.
 * - 온도가 10°C 이상 20°C 미만이면 "적당"를 출력합니다.
 * - 온도가 20°C 이상이면 "더움"를 출력합니다.
 */

let temperature = 10;

if (temperature < 0) {
  console.log("매우 추움");
} else if (temperature < 10) {
  console.log("추움");
} else if (temperature < 20) {
  console.log("적당");
} else {
  console.log("더움");
}
