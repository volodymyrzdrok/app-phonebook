import { useDispatch } from 'react-redux';
import AuthForm from 'components/AuthForm/AuthForm';
import { loginUser } from 'redux/auth/authOperations';

const LoginForm = () => {
  const dispatch = useDispatch();

  const onSubmit = userDataValue => {
    const { email, password } = userDataValue;
    dispatch(loginUser({ email, password }));
  };

  return (
    <>
      <AuthForm
        authType="login"
        title="Log In"
        subTitle="Sign In"
        onSubmitFunc={onSubmit}
      />
    </>
  );
};

export default LoginForm;
