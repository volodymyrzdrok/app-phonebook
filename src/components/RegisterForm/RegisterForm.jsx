import {
  FormControl,
  Typography,
  FormLabel,
  Input,
  Button,
  Sheet,
  CssVarsProvider,
} from '@mui/joy';

const RegisterForm = () => {
  return (
    <CssVarsProvider>
      <Sheet
        component="form"
        sx={{
          width: 400,
          mx: 'auto', // margin left & right
          my: 4, // margin top & botom
          py: 3, // padding top & bottom
          px: 2, // padding left & right
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
            <b>Register</b>
          </Typography>
          <Typography level="body2">Sign up to continue.</Typography>
        </div>
        <FormControl>
          <FormLabel>Email</FormLabel>
          <Input
            disabled
            name="email"
            type="email"
            placeholder="johndoe@email.com"
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

        <Button disabled sx={{ mt: 1 /* margin top */ }}>
          Sign Up
        </Button>
      </Sheet>
    </CssVarsProvider>
  );
};

export default RegisterForm;
