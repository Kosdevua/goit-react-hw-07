import { useDispatch } from "react-redux";
import { FaUser, FaPhone } from "react-icons/fa";
import { deleteContact } from "../../redux/contactsOps";
import s from "./Contact.module.css";

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();

  return (
    <li className={s.contact_wrapper}>
      <div className={s.contact_data}>
        <p>
          <span>
            <FaUser />
          </span>
          {name}
        </p>
        <p>
          <span>
            <BsFillTelephoneFill />
          </span>
          {number}
        </p>
      </div>
      <button
        onClick={() => dispatch(deleteContact(id))}
        className={s.contact_btn}
      >
        Delete
      </button>
    </li>
  );
};

export default Contact;
