## 과제) 배달 음식 주문 페이지 만들기

이번 과제는 React.js를 사용해 아주 아주 심플한 배달 음식 주문 페이지를 만들어 보는 과제입니다.

강의중에 소개하는 `State`, `이벤트 핸들링`, `State로 사용자 입력 관리하기` 개념이 꼭 필요합니다.

아래 **미션 소개** 섹션에 안내되어 있는 순서에 따라 진행하세요

## 미션 제출 방법

미션 제출은 다음 방법중 하나를 선택하시면 됩니다.

1. 실행 결과 터미널 캡쳐 (코드 리뷰는 불가능합니다)
2. GitHub에 프로젝트 업로드 후 링크로 공유
3. CodeSandbox에 프로젝트 업로드 후 링크로 공유
4. VsCode 화면 캡쳐 (원하시는 부분을 캡쳐해주시면 됩니다)

> [정답 보기](https://github.com/winterlood/onebite-react-challenge/blob/main/missions/day11/answer)

## 미션 소개

### 1. 새로운 리액트 앱을 하나 생성하세요 (생략 가능)

vite를 이용해 새로운 React App을 생성하세요  
(이전에 만들어 둔 프로젝트를 재 활용 하셔도 됩니다.)

- 이름은 자유롭게 정하셔도 됩니다.
- 강의 중 안내드린대로 실습 설정을 완료해 주세요
- 앞으로의 미션용 프로젝트들을 위해 하나의 폴더에 모아두시는 걸 추천합니다.

### 2. OrderEditor 컴포넌트 구현하기

OrderEditor 컴포넌트는 다음 그림처럼 배달 음식 주문을 위해 사용자의 입력을 받는 역할을 합니다.  
(UI를 위한 코드는 모두 제공되니 직접 UI를 구현하시지는 않아도 됩니다.)

<img width="300" alt="image" src="https://github.com/winterlood/onebite-react-challenge/assets/46296754/aa158709-f938-4cb4-8078-e0c003c26523">

다음 요구사항을 만족하도록 OrderEditor 컴포넌트를 생성하세요

- 모듈화를 위해 `src/components` 폴더 안에 별도 파일을 생성해 보관합니다.
- 다음 코드를 붙여넣습니다. (UI 코드)

  ```javascript
  // src/components/OrderEditor.jsx

  const OrderEditor = () => {
    return (
      <div
        style={{ display: "flex", flexDirection: "column", gap: 10 }}
      >
        <h2>배달의민족 주문</h2>
        <div>
          <div style={{ marginBottom: 5, fontSize: 14 }}>
            메뉴 선택
          </div>
          <select style={{ width: 300, padding: 5 }}>
            <option value={"족발"}>족발</option>
            <option value={"떡볶이"}>떡볶이</option>
            <option value={"아이스크림"}>아이스크림</option>
            <option value={"샐러드"}>샐러드</option>
          </select>
        </div>
        <div>
          <div style={{ marginBottom: 5, fontSize: 14 }}>
            배달 주소
          </div>
          <input
            style={{ width: 300, padding: 5 }}
            placeholder="주소) 서울특별시 xx동 .."
          />
        </div>
        <div>
          <div style={{ marginBottom: 5, fontSize: 14 }}>
            배달 요청사항
          </div>
          <textarea
            style={{ width: 300, padding: 5 }}
            placeholder="배달 요청사항을 써 주세요..."
          />
        </div>
        <div>
          <button
            onClick={onSubmit}
            style={{ width: 300, padding: 5 }}
          >
            주문 완료
          </button>
        </div>
      </div>
    );
  };
  ```

- 3개의 입력 폼(메뉴, 주소, 요청사항)에 사용자가 입력한 값을 State에 보관합니다.

  - useState를 이용해 각각의 입력을 저장하기 위한 3개의 State를 생성합니다.

    - menu : 메뉴를 저장하기 위한 State
    - address : 배달 주소를 저장하기 위한 State
    - request : 배달 요청사항을 저장하기 위한 State

  - 각 input, select 태그에 value와 onChange 속성을 설정합니다.

- 컴포넌트 리턴문 최 하단의 `주문 완료` 버튼이 클릭되면 사용자가 입력한 값을 `alert`로 출력합니다.

  <img width="400" alt="image" src="https://github.com/winterlood/onebite-react-challenge/assets/46296754/98bd247b-bdc4-447f-be6c-251e27af0b8f">

  - 버튼태그의 onClick 이벤트 핸들러 함수 `onSubmit을` 만듭니다.

  - onSubmit 함수 내부에서 alert 메서드를 이용해 현재 State에 보관된 값을 출력합니다.
