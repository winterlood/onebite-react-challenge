import { memo, useContext } from "react";
import "./ContactItem.css";
import { ContactDispatchContext } from "../App";

/* 1. onRemoveContact 함수를 더 이상 Props로 제공받지 않음, Context로 부터 제공 받음 */
function ContactItem({ id, name, contact }) {
  /* 2. useContext를 이용해 ContactDispatchContext로 부터 onRemoveContact 함수를 공급받음 */
  const { onRemoveContact } = useContext(ContactDispatchContext);
  return (
    <div className="ContactItem">
      <div className="name">{name}</div>
      <div className="contact">{contact}</div>
      <button onClick={() => onRemoveContact(id)}>🗑️ Remove</button>
    </div>
  );
}

export default memo(ContactItem);
