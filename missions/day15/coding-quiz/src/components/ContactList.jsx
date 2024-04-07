import "./ContactList.css";
import ContactItem from "./ContactItem";

export default function ContactList() {
  return (
    <div className="ContactList">
      <div className="title">Contact List</div>
      <ContactItem />
      <ContactItem />
      <ContactItem />
    </div>
  );
}
