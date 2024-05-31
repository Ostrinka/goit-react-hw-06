import SearchBox from '../SearchBox/SearchBox.jsx';
import ContactList from '../ContactList/ContactList.jsx';
import ContactForm from '../ContactForm/ContactForm';
import userContacts from '../../userContacts.json';
import { useState, useEffect } from 'react';
import css from './App.module.css';

export default function App() {
  const [filter, setFilter] = useState('');

    const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem('contacts');
    return savedContacts ? JSON.parse(savedContacts) : userContacts;
  });

  const addContact = (newContact) => {
  setContacts((prevContacts) => {
    return [...prevContacts, newContact];
    });
  };

  const deleteContact = contactId => {
    setContacts(prevContacts => {
      return prevContacts.filter(contact => contact.id !== contactId);
    });
  };
  
  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const visibleContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm onAdd={addContact}/>
      <SearchBox filter={filter} setFilter={setFilter} />
      <ContactList contacts={visibleContacts} deleteContact={deleteContact} />
    </>
  );
}


