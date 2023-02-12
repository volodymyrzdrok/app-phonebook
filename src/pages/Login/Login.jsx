import LoginForm from 'components/LoginForm/LoginForm';
import routes from 'constants/routes';
import { useRouteRedirect } from 'hooks/useRouteRedirect';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import { resetAuthError, selectAuthError } from 'redux/auth/authSlise';

const Login = () => {
  useRouteRedirect(true, routes.contacts);

  const dispatch = useDispatch();
  const errorAuth = useSelector(selectAuthError);

  useEffect(() => {
    if (errorAuth === 'Request failed with status code 400') {
      toast.warning('Invalid Email or Password', settingAlert());
      dispatch(resetAuthError());
    }
  }, [errorAuth, dispatch]);

  return (
    <>
      <LoginForm />
      <ToastContainer />
    </>
  );
};

export default Login;

function settingAlert() {
  return {
    position: 'top-right',
    autoClose: 1500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    theme: 'light',
  };
}
