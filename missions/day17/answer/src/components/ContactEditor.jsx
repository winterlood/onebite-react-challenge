import { useContext, useState } from "react";
import "./ContactEditor.css";
import { ContactDispatchContext } from "../App";

/* 1.ContactEditor 컴포넌트는 더 이상 Props를 필요로 하지 않음 */
export default function ContactEditor() {
  /* 2. useContext를 이용해 ContactDispatchContext로 부터 onCreateContact 함수를 공급받음 */
  const { onCreateContact } = useContext(ContactDispatchContext);

  const [state, setState] = useState({
    name: "",
    contact: "",
  });

  const onChangeState = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = () => {
    if (state.name === "" || state.contact === "") {
      alert("이름과 연락처를 입력해주세요");
      return;
    }
    onCreateContact(state.name, state.contact);

    setState({
      name: "",
      contact: "",
    });
  };

  return (
    <div className="ContactEditor">
      <div className="title">Add Contact</div>
      <div className="input_wrapper">
        <input
          name="name"
          value={state.name}
          onChange={onChangeState}
          className="name"
          placeholder="이름 ..."
        />
        <input
          name="contact"
          value={state.contact}
          onChange={onChangeState}
          className="contact"
          placeholder="연락처(이메일) ..."
        />
      </div>
      <button onClick={onSubmit}>Add</button>
    </div>
  );
}
