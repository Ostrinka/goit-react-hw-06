import Contact from '../Contact/Contact.jsx'
import { useSelector } from 'react-redux';
import { filteredContacts } from '../../redux/filtersSlice';
import css from './ContactList.module.css';

export default function ContactList() {
  const contacts = useSelector(filteredContacts);
  
  return (
    <ul className={css.menu}>
      {contacts.map(contact => (
        <li className={css.list} key={contact.id} >
          <Contact contact={contact} />
        </li>
      ))}
    </ul>
  );
}