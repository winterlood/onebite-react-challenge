## 과제) 연락처 앱(Contact List) 프로젝트 최적화하기

이번 과제는 Day 15에서 만들어 본 "연락처 앱"을 업그레이드 해 보는 과제입니다.  
아래 **미션 소개** 섹션에 안내되어 있는 순서에 따라 진행하세요

## 미션 제출 방법

미션 제출은 다음 방법중 하나를 선택하시면 됩니다.

1. 실행 결과 터미널 캡쳐 (코드 리뷰는 불가능합니다)
2. GitHub에 프로젝트 업로드 후 링크로 공유
3. CodeSandbox에 프로젝트 업로드 후 링크로 공유
4. VsCode 화면 캡쳐 (원하시는 부분을 캡쳐해주시면 됩니다)

> [정답 보기](https://github.com/winterlood/onebite-react-challenge/blob/main/missions/day16/answer)

## 미션 소개

이번 미션은 Day 15 미션의 연장선으로 해당 코드를 복제 또는 재사용 하셔야 합니다.  
만약 Day 15 미션을 완료하지 않으셨거나 코드를 제거하신 경우 아래 링크에서 Day 15의 정답 코드를 복제해 사용하시면 됩니다.

> [Day 15 정답 보기](https://github.com/winterlood/onebite-react-challenge/blob/main/missions/day15/answer)

### ContactItem 컴포넌트 렌더링 최적화하기

- 필수) 연락처 아이템 역할의 `ContactItem` 컴포넌트를 불 필요한 상황에 렌더링 되지 않도록 최적화 하세요
- 필수) `useCallback과` `React.memo`를 활용해야 합니다.
- 선택) `ContactEditor` 컴포넌트도 불 필요한 상황에 렌더링 되지 않도록 최적화 해 보세요
