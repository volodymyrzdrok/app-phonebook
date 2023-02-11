import {
  FormControl,
  Typography,
  FormLabel,
  Input,
  Button,
  Sheet,
  CssVarsProvider,
} from '@mui/joy';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const AuthForm = ({ title, subTitle, onSubmitFunc, authType }) => {
  const formik = useFormik({
    initialValues:
      authType === 'register'
        ? {
            name: '',
            email: '',
            password: '',
          }
        : {
            email: '',
            password: '',
          },

    validationSchema: SignupSchema(authType),
    onSubmit: values => {
      onSubmitFunc(values);
    },
  });

  const { errors, touched } = formik;
  return (
    <CssVarsProvider>
      <Sheet
        onSubmit={formik.handleSubmit}
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
            <b>{title}</b>
          </Typography>
          <Typography level="body2">{subTitle} to continue.</Typography>
        </div>

        {authType === 'register' && (
          <FormControl>
            <FormLabel>
              Name
              <Typography sx={{ color: 'red', fontSize: 10, ml: 3 }}>
                {errors.name && touched.name ? errors.name : null}
              </Typography>
            </FormLabel>
            <Input
              name="name"
              type="text"
              placeholder="Name and surname"
              onChange={formik.handleChange}
              value={formik.values.name}
            />
          </FormControl>
        )}
        <FormControl>
          <FormLabel>
            Email
            <Typography sx={{ color: 'red', fontSize: 10, ml: 3 }}>
              {errors.email && touched.email ? errors.email : null}
            </Typography>
          </FormLabel>
          <Input
            name="email"
            type="email"
            placeholder="johndoe@email.com"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
        </FormControl>
        <FormControl>
          <FormLabel>
            Password
            <Typography sx={{ color: 'red', fontSize: 10, ml: 3 }}>
              {errors.password && touched.password ? errors.password : null}
            </Typography>
          </FormLabel>
          <Input
            name="password"
            type="password"
            placeholder="password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
        </FormControl>

        <Button type="submit" sx={{ mt: 1 }}>
          {subTitle}
        </Button>
      </Sheet>
    </CssVarsProvider>
  );
};

export default AuthForm;

function SignupSchema(authType) {
  const defaultValidate = {
    email: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .matches(
        '[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$',
        'must be a valid email'
      )
      .required(),
    password: Yup.string().min(8, 'Too Short!').max(50, 'Too Long!').required(),
  };

  return Yup.object().shape(
    authType === 'register'
      ? {
          name: Yup.string()
            .min(2, 'Too Short!')
            .max(50, 'Too Long!')
            .matches(
              "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$",
              'only letters!'
            )
            .required(),

          ...defaultValidate,
        }
      : defaultValidate
  );
}
