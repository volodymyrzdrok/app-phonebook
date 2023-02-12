import RegisterForm from 'components/RegisterForm/RegisterForm';
import routes from 'constants/routes';
import { useRouteRedirect } from 'hooks/useRouteRedirect';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import { resetAuthError, selectAuthError } from 'redux/auth/authSlise';

const Register = () => {
  useRouteRedirect(true, routes.contacts);

  const dispatch = useDispatch();
  const errorAuth = useSelector(selectAuthError);

  useEffect(() => {
    if (errorAuth === 'Request failed with status code 400') {
      toast.warning('User is already logged', settingAlert());
      dispatch(resetAuthError());
    }
  }, [errorAuth, dispatch]);

  return (
    <>
      <RegisterForm />
      <ToastContainer />
    </>
  );
};

export default Register;

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
