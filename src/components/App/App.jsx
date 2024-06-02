import SearchBox from '../SearchBox/SearchBox.jsx';
import ContactList from '../ContactList/ContactList.jsx';
import ContactForm from '../ContactForm/ContactForm';
import css from './App.module.css';

export default function App() {
  
  return (
    <>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </>
  );
}


