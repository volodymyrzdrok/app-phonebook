import RegisterForm from 'components/RegisterForm/RegisterForm';
import routes from 'constants/routes';
import { useRouteRedirect } from 'hooks/useRouteRedirect';

const Register = () => {
  useRouteRedirect(true, routes.contacts);
  return (
    <>
      <RegisterForm />
    </>
  );
};

export default Register;
