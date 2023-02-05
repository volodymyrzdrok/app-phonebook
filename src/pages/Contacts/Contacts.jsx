import Filter from '../../components/Filter/Filter';
import ContactForm from '../../components/ContactForm/ContactForm';
import ContactList from '../../components/ContactList/ContactList';
import { useRouteRedirect } from 'hooks/useRouteRedirect';
import routes from 'constants/routes';

const Contacts = () => {
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
