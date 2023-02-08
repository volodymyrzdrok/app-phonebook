import { useDispatch } from 'react-redux';
import { logIn } from 'redux/slice';
import {
  FormControl,
  Typography,
  FormLabel,
  Input,
  Button,
  Sheet,
  CssVarsProvider,
} from '@mui/joy';

const LoginForm = () => {
  const dispatch = useDispatch();

  const onSubmitForm = e => {
    e.preventDefault();
    const newUserName = e.target.name.value.trim();
    dispatch(logIn(newUserName));
    e.target.reset();
  };

  return (
    <CssVarsProvider>
      <Sheet
        onSubmit={onSubmitForm}
        component="form"
        sx={{
          width: 400,
          mx: 'auto',
          my: 4,
          py: 3,
          px: 2,
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          borderRadius: 'sm',
          boxShadow: 'md',
        }}
        variant="outlined"
      >
        <div>
          <Typography level="h4" component="h1">
            <b>Log In</b>
          </Typography>
          <Typography level="body2">Sign in to continue.</Typography>
        </div>
        <FormControl>
          <FormLabel>Name User</FormLabel>
          <Input
            // name="email"
            // type="email"
            // placeholder="johndoe@email.com"
            name="name"
            type="text"
            placeholder="user name"
          />
        </FormControl>
        <FormControl>
          <FormLabel>Password</FormLabel>
          <Input
            disabled
            name="password"
            type="password"
            placeholder="password"
          />
        </FormControl>

        <Button type="submit" sx={{ mt: 1 }}>
          Sign In
        </Button>
      </Sheet>
    </CssVarsProvider>
  );
};

export default LoginForm;
