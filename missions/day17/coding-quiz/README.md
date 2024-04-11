## 과제) 연락처 앱(Contact List) 프로젝트에 Context 적용하기

이번 과제는 Day 16에서 최적화한 "연락처 앱"에 Context를 적용해보는 과제입니다.  
혹시 Day 16의 최적화가 너무 어려워서 과제를 진행하지 못했다면  
Day 15의 코드에 이어서 작성하셔도 무방합니다. (최적화 배제해도 괜찮습니다)

아래 **미션 소개** 섹션에 안내되어 있는 순서에 따라 진행하세요

## 미션 제출 방법

미션 제출은 다음 방법중 하나를 선택하시면 됩니다.

1. 실행 결과 터미널 캡쳐 (코드 리뷰는 불가능합니다)
2. GitHub에 프로젝트 업로드 후 링크로 공유
3. CodeSandbox에 프로젝트 업로드 후 링크로 공유
4. VsCode 화면 캡쳐 (원하시는 부분을 캡쳐해주시면 됩니다)

> [정답 보기](https://github.com/winterlood/onebite-react-challenge/blob/main/missions/day17/answer)

## 미션 소개

이번 미션은 Day 16 미션의 연장선으로 해당 코드를 복제 또는 재사용 하셔야 합니다.  
만약 Day 16 미션을 완료하지 않으셨거나 코드를 제거하신 경우  
아래 링크에서 Day 16의 정답 코드를 복제해 사용하시면 됩니다.

> [Day 16 정답 보기](https://github.com/winterlood/onebite-react-challenge/blob/main/missions/day16/answer)

### Context를 사용하도록 프로젝트 업그레이드하기

Day 17 진도에서 배우는 React의 Context를 사용해 프로젝트를 업그레이드 해 주세요

- `App` 컴포넌트의 `contacts` State를 공급할 Context 객체를 하나 생성하세요
- `App` 컴포넌트의 `onCreateContact`, `onRemoveContact`를 공급할 Context 객체를 하나 생성하세요

- ContactEditor 컴포넌트가 Context 객체로부터 onCreateContact 함수를 공급받도록 수정하세요
- ContactList 컴포넌트가 Context 객체로부터 contacts State를 공급받도록 수정하세요
  - 이 컴포넌트에서 Props로 공급받던 onRemoveContact함수는 이제 더이상 필요하지 않습니다.
- ContactItem 컴포넌트가 Context 객체로부터 onRemoveContact 함수를 공급받도록 수정하세요

### 너무 어렵다면 정답 코드를 보세요!

React의 최적화 및 Context 개념은 초보자에게 어려운 개념이 맞습니다.  
따라서 미션을 해결하기 너무 너무 어려우시다면 정답 코드를 보고 아이디어를 얻은 다음 스스로 구현해보시기 바랍니다!

> [정답 보기](https://github.com/winterlood/onebite-react-challenge/blob/main/missions/day17/answer)

아래와 같이 정답 코드에 어떤 부분이 추가되어야 하고 변경되어야 하는지 친절히 주석으로 다 남겨두었습니다

```javascript
/* 1.ContactList 컴포넌트는 더 이상 Props를 필요로 하지 않음 */
export default function ContactList() {
  /* 2. useContext를 이용해 ContactStateContext 부터 contacts State를 공급받음 */
  const contacts = useContext(ContactStateContext);

  return (
    <div className="ContactList">
      <div className="title">Contact List</div>
      {/* 3. ContactItem에게 Props로 전달했던 onRemoveContact 함수도 제거, Context를 통해 직접 공급받게 하면 되기 때문 */}
      {contacts.map((contact) => (
        <ContactItem key={contact.id} {...contact} />
      ))}
    </div>
  );
}
```
