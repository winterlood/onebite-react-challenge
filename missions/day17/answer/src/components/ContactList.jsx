import "./ContactList.css";
import ContactItem from "./ContactItem";
import { useContext } from "react";
import { ContactStateContext } from "../App";

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
