import LoginForm from 'components/LoginForm/LoginForm';
import routes from 'constants/routes';
import { useRouteRedirect } from 'hooks/useRouteRedirect';

const Login = () => {
  useRouteRedirect(true, routes.contacts);
  return (
    <>
      <LoginForm />
    </>
  );
};

export default Login;
