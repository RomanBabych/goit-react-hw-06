import css from "./Contact.module.css";
import { FaUser } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";

export default function Contact({ contact, deleteContact }) {
  return (
    <div className={css.contactCard}>
      <div className={css.contactInfo}>
        <div className={css.nameWrapper}>
          <FaUser /> <p>{contact.name}</p>
        </div>
        <div className={css.phoneWrapper}>
          <FaPhone /> <p>{contact.number}</p>
        </div>
      </div>
      <button
        className={css.deleteBtn}
        onClick={() => deleteContact(contact.id)}
      >
        Delete
      </button>
    </div>
  );
}
