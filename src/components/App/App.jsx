// import { useSelector, useDispatch } from 'react-redux';
import SearchBox from '../SearchBox/SearchBox.jsx';
import ContactList from '../ContactList/ContactList.jsx';
import ContactForm from '../ContactForm/ContactForm';
// import { addContact, deleteContact, selectContacts } from '../../redux/contactsSlice.js';
// import { setFilter, selectFilter } from '../../redux/filtersSlice.js';
// import userContacts from '../../userContacts.json';
// import { useState, useEffect } from 'react';
import css from './App.module.css';

export default function App() {
  // const dispatch = useDispatch();
  // const contacts = useSelector(selectContacts);
  // const filter = useSelector(selectFilter);
  // const [filter, setFilter] = useState('');

  //  const handleAddContact = (name, number) => {
  //   dispatch(addContact(name, number));
  // };

  // const handleDeleteContact = (contactId) => {
  //   dispatch(deleteContact(contactId));
  // };

  // const handleFilterChange = (filterValue) => {
  //    dispatch(setFilter(filterValue));
  //  };

  //   const [contacts, setContacts] = useState(() => {
  //   const savedContacts = localStorage.getItem('contacts');
  //   return savedContacts ? JSON.parse(savedContacts) : userContacts;
  // });

  // const addContact = (newContact) => {
  // setContacts((prevContacts) => {
  //   return [...prevContacts, newContact];
  //   });
  // };

  // const deleteContact = contactId => {
  //   setContacts(prevContacts => {
  //     return prevContacts.filter(contact => contact.id !== contactId);
  //   });
  // };
  
  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  // const visibleContacts = contacts.filter((contact) =>
  //   contact.name.toLowerCase().includes(filter.name.toLowerCase())
  // );

  return (
    <>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </>
  );
}


