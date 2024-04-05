import { useRef, useState } from "react";

const OrderEditor = () => {
  const [state, setState] = useState({
    menu: "",
    address: "",
    request: "",
  });
  const addressRef = useRef();

  const onChangeState = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = () => {
    if (addressRef.current.value === "") {
      addressRef.current.focus();
      return;
    }

    alert(
      `주문이 완료되었습니다 메뉴 : ${state.menu}, 주소 : ${state.address}, 요청사항: ${state.request}`
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
          name="menu"
          value={state.menu}
          onChange={onChangeState}
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
          ref={addressRef}
          name="address"
          value={state.address}
          onChange={onChangeState}
          style={{ width: 300, padding: 5 }}
          placeholder="주소) 서울특별시 xx동 .."
        />
      </div>
      <div>
        <div style={{ marginBottom: 5, fontSize: 14 }}>
          배달 요청사항
        </div>
        <textarea
          name="request"
          value={state.request}
          onChange={onChangeState}
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
