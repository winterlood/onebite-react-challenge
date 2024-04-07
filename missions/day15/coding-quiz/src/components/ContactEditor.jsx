import "./ContactEditor.css";

export default function ContactEditor() {
  return (
    <div className="ContactEditor">
      <div className="title">Add Contact</div>
      <div className="input_wrapper">
        <input className="name" placeholder="이름 ..." />
        <input className="contact" placeholder="연락처(이메일) ..." />
      </div>
      <button>Add</button>
    </div>
  );
}
