## 과제) Node.js 기반의 랜덤 텍스트 출력 프로그램 만들기

이번 과제는 Node.js 패키지를 직접 생성하고 설정한 다음  
[chance](https://www.npmjs.com/package/chance) 라는 랜덤 텍스트를 생성하는 라이브러리를 이용해 문제를 해결하는 과제입니다.  
ES 모듈 시스템과 패키지 스크립트 기능도 함께 활용해야 합니다.

아래 **미션 소개** 섹션에 안내되어 있는 순서에 따라 새로운 Node.js 패키지를 설정하고 프로그램을 완성해보세요

## 미션 제출 방법

미션 제출은 다음 방법중 하나를 선택하시면 됩니다.

1. 실행 결과 터미널 캡쳐 (코드 리뷰는 불가능합니다)
2. GitHub에 프로젝트 업로드 후 링크로 공유
3. CodeSandbox에 프로젝트 업로드 후 링크로 공유
4. VsCode 화면 캡쳐 (원하시는 부분을 캡쳐해주시면 됩니다)

> [정답 보기](https://github.com/winterlood/onebite-react-challenge/blob/main/missions/day08/coding-quiz/answer)

## 미션 소개

### 1. 패키지 생성 및 기본 설정

1. 루트폴더 생성하기
2. npm init 으로 패키지 초기화 하기

   - 패키지의 이름은 day08

3. ES 모듈 시스템을 사용하도록 설정하기
   - <details>
     <summary>힌트 보기</summary>
     <p>package.json에 <code>type:"module"</code> 속성을 추가하기</p>
     </details>

### 2. 패키지 스크립트 설정하기

1. src/index.js 파일 생성하기
2. start 패키지 스크립트 설정하기
   - `start : "node src/index.js" `

### 3. Chance 라이브러리 설치하기

1. chance 라이브러리 설치하기 (change 아님)
   - https://www.npmjs.com/package/chance
   - [라이브러리 사용법](https://chancejs.com/)
2. 설치 된 라이브러리 버전 확인하기
   - 1점대 버전이면 OK

### 4. 코드 작성하기

1. `src/random.js`

   - 다음 코드를 `src/random.js` 파일에 작성하세요
   - 아래의 코드에 더 추가하고 싶은 기능이 있다면 아래의 문서를 참고해 함수 형태로 만들어주세요
     - https://chancejs.com/

   ```javascript
   import Chance from "Chance";
   const change = new Chance();

   /* chance를 이용해 무작위 이름을 생성해 반환 */
   export function getRandomName() {
     return change.name();
   }

   /* chance를 이용해 무작위 이메일을 생성해 반환 */
   export function getRandomEmail() {
     return change.email();
   }
   ```

2. `src/index.js`

   - 다음 코드를 `src/index.js` 파일에 작성하세요
   - 1번에서 더 추가된 함수를 불러와 사용해보세요

   ```javascript
   import { getRandomName, getRandomEmail } from "./random.js";

   const name1 = getRandomName();
   const name2 = getRandomName();
   const name3 = getRandomName();
   console.log(name1, name2, name3);

   const email1 = getRandomEmail();
   const email2 = getRandomEmail();
   const email3 = getRandomEmail();
   console.log(email1, email2, email3);
   ```

### 5. 실행하기

- 앞서 만들어둔 `start` 스크립트로 `src/index.js` 파일을 실행 하세요
