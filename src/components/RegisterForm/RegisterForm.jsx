import AuthForm from 'components/AuthForm/AuthForm';
import { useDispatch } from 'react-redux';
import { registerUser } from 'redux/auth/authOperations';

const RegisterForm = () => {
  const dispatch = useDispatch();

  const onSubmit = userDataValue => {
    dispatch(registerUser(userDataValue));
  };
  return (
    <>
      <AuthForm
        authType="register"
        title="Register"
        subTitle="Sign Up"
        onSubmitFunc={onSubmit}
      />
    </>
  );
};

export default RegisterForm;
