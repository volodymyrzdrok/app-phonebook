import Filter from '../../components/Filter/Filter';
import ContactForm from '../../components/ContactForm/ContactForm';
import ContactList from '../../components/ContactList/ContactList';
import { useRouteRedirect } from 'hooks/useRouteRedirect';
import routes from 'constants/routes';
import { useEffect } from 'react';
import { fetchAllContacts } from 'redux/contacts/contactsOperations.js';
import { useDispatch } from 'react-redux';

const Contacts = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllContacts());
  }, [dispatch]);

  useRouteRedirect(false, routes.home);
  return (
    <>
      <ContactForm />
      <Filter />
      <ContactList />
    </>
  );
};

export default Contacts;
