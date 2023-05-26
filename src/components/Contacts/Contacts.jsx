import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import ContactForm from '../ContactForm/ContactForm';
import Filter from '../Filter/Filter';
import ContactList from '../ContactList/ContactList';

import { fetchContacts } from 'redux/operations';

import css from './Contacts.module.css';

export const Contacts = () => {
  const { contacts, isLoading, error } = useSelector(state => state.contacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <div className={css.phonebook}>
        {error && <h2>An error occurred, please restart the application!!!</h2>}

        <h1 className={css['phonebook-title']}>Phonebook</h1>

        {!error && <ContactForm />}

        {contacts.length > 0 ? (
          <>
            <h2>Contacts</h2>
            <Filter />
          </>
        ) : (
          <h2>There are no contacts</h2>
        )}

        {isLoading && <h3>Loading...</h3>}

        {contacts && !error && <ContactList />}
      </div>
    </>
  );
};
