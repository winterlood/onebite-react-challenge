import { useState } from "react";

const OrderEditor = () => {
  const [menu, setMenu] = useState("족발");
  const [address, setAddress] = useState("");
  const [request, setRequest] = useState("");

  const onChangeMenu = (e) => {
    setMenu(e.target.value);
  };

  const onChangeAddress = (e) => {
    setAddress(e.target.value);
  };

  const onChangeRequest = (e) => {
    setRequest(e.target.value);
  };

  const onSubmit = () => {
    alert(
      `주문이 완료되었습니다 메뉴 : ${menu}, 주소 : ${address}, 요청사항: ${request}`
    );
  };

  return (
    <div
      style={{ display: "flex", flexDirection: "column", gap: 10 }}
    >
      <h2>배달 음식 주문</h2>
      <div>
        <div style={{ marginBottom: 5, fontSize: 14 }}>메뉴 선택</div>
        <select
          value={menu}
          onChange={onChangeMenu}
          style={{ width: 300, padding: 5 }}
        >
          <option value={"족발"}>족발</option>
          <option value={"떡볶이"}>떡볶이</option>
          <option value={"아이스크림"}>아이스크림</option>
          <option value={"샐러드"}>샐러드</option>
        </select>
      </div>
      <div>
        <div style={{ marginBottom: 5, fontSize: 14 }}>배달 주소</div>
        <input
          value={address}
          onChange={onChangeAddress}
          style={{ width: 300, padding: 5 }}
          placeholder="주소) 서울특별시 xx동 .."
        />
      </div>
      <div>
        <div style={{ marginBottom: 5, fontSize: 14 }}>
          배달 요청사항
        </div>
        <textarea
          value={request}
          onChange={onChangeRequest}
          style={{ width: 300, padding: 5 }}
          placeholder="배달 요청사항을 써 주세요..."
        />
      </div>
      <div>
        <button onClick={onSubmit} style={{ width: 300, padding: 5 }}>
          주문 완료
        </button>
      </div>
    </div>
  );
};

export default OrderEditor;
