/**
 * [카페 할인 이벤트]
 * 목표: 성공적인 카페 홍보를 위해서 모든 메뉴에 500원씩 할인을 적용하려고 합니다.
 *
 * 다음 요구사항을 만족하는 getMenusWithDiscountedPrice 함수를 완성하세요
 *   1. 카페 메뉴 배열인 menus를 매개변수로 제공받습니다.
 *   2. menus 배열의 모든 아이템(메뉴)에 기존가(price)에서
 *      500원 할인된 할인가를 저장하는 discountedPrice를 추가한 새로운 배열을 만듭니다.
 *   3. discountedPrice가 추가된 새로운 배열을 반환합니다.
 */

function getDiscountedMenus(menus) {
  // 여기에 코드를 작성하세요 ...
}

const discountedMenus = getDiscountedMenus([
  { itemId: 1, name: "아메리카노", price: 3000 },
  { itemId: 2, name: "라떼", price: 3500 },
  { itemId: 3, name: "초콜릿 케이크", price: 5000 },
  { itemId: 4, name: "크로와상", price: 2800 },
]);

console.log(discountedMenus);
// 출력 결과 :
// { itemId: 1, name: '아메리카노', price: 3000, discountedPrice: 2500 },
// { itemId: 2, name: '라떼', price: 3500, discountedPrice: 3000 },
// { itemId: 3, name: '초콜릿 케이크', price: 5000, discountedPrice: 4500 },
// { itemId: 4, name: '크로와상', price: 2800, discountedPrice: 2300 }
