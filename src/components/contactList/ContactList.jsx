import s from "./ContactList.module.css";
import Contact from "../contact/Contact";
import { useSelector } from "react-redux";

const ContactList = () => {
  const contacts = useSelector((state) => state.contacts.items);
  const filter = useSelector((state) => state.filter?.name || ""); 

  const filteredData = contacts.filter((item) =>
    item.name.toLowerCase().includes(filter.toLowerCase()) 
  );

  return (
    <ul className={s.contact}>
      {filteredData.map(({ id, name, number }) => (
        <Contact key={id} id={id} name={name} number={number} />
      ))}
    </ul>
  );
};

export default ContactList;
