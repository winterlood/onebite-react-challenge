## 과제) Welcome React App 만들기

이번 과제는 새로운 React App을 생성하고 간단한 컴포넌트를 만들어 보는 과제입니다.

강의중에 소개하는 JSX 문법 및 React의 Component와 Props에 대한 개념이 필요합니다.

아래 **미션 소개** 섹션에 안내되어 있는 순서에 따라 새로운 Node.js 패키지를 설정하고 프로그램을 완성해보세요

## 미션 제출 방법

미션 제출은 다음 방법중 하나를 선택하시면 됩니다.

1. 실행 결과 터미널 캡쳐 (코드 리뷰는 불가능합니다)
2. GitHub에 프로젝트 업로드 후 링크로 공유
3. CodeSandbox에 프로젝트 업로드 후 링크로 공유
4. VsCode 화면 캡쳐 (원하시는 부분을 캡쳐해주시면 됩니다)

> [정답 보기](https://github.com/winterlood/onebite-react-challenge/blob/main/missions/day10/coding-quiz/answer)

## 미션 소개

### 1. 새로운 리액트 앱을 하나 생성하세요

vite를 이용해 새로운 React App을 생성하세요

- 이름은 자유롭게 정하셔도 됩니다.
- 강의 중 안내드린대로 실습 설정을 완료해 주세요
- 앞으로의 미션용 프로젝트들을 위해 하나의 폴더에 모아두시는 걸 추천합니다.

### 2. Welcome 컴포넌트 구현하기

src/App.jsx 안에 다음 조건을 만족하는 **Welcome** 컴포넌트를 구현하세요

- Welcome 컴포넌트는 App 컴포넌트의 자식 컴포넌트입니다.
- Welcome 컴포넌트는 다음 2개의 Props를 받습니다.
  - 사용자의 이름을 의미하는 `name`
  - 사용자의 가입 여부를 의미하는 `isMember`
- `isMember` 값에 따라 다음과 같이 조건부 렌더링을 수행합니다:

  - `true`일 경우:`"${name}님 다시 오셨군요"`를 렌더링.
    ![image](https://github.com/winterlood/onebite-react-challenge/assets/46296754/9b7adc58-3d48-4813-b7cb-4519b4451dbd)

  - `false`일 경우: `"${name}님 가입하시겠어요?"`를 렌더링.
    ![image](https://github.com/winterlood/onebite-react-challenge/assets/46296754/61e49235-1698-4956-ba13-7b9d1c9d03f1)

  > 힌트 : 삼항연산자를 이용해 보세요 (or 조건문)
