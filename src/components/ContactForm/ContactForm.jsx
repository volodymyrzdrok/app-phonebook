import { useDispatch, useSelector } from 'react-redux';

import AddIcon from '@mui/icons-material/Add';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import TtyIcon from '@mui/icons-material/Tty';
import {
  Sheet,
  FormControl,
  FormLabel,
  Input,
  Button,
  Typography,
  CssVarsProvider,
} from '@mui/joy';
import { addOneContact } from 'redux/contacts/contactsOperations';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { selectContacts } from 'redux/contacts/contactsSlice';

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .matches(
      "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$",
      'only letters!'
    )
    .required('Required'),
  number: Yup.number()
    .typeError("That doesn't look like a phone number")
    .positive("A phone number can't start with a minus")
    .integer("A phone number can't include a decimal point")
    .min(8)
    .required('A phone number is required'),
});

const ContactForm = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      name: '',
      number: '',
    },
    validationSchema: SignupSchema,
    onSubmit: values => {
      // const createdAt = new Date();
      const foundEl = contacts.find(
        el => el.name.toLowerCase() === values.name.toLowerCase()
      );
      if (foundEl) {
        toast.info(`${foundEl.name} is already in contacts`, settingAlert());
      } else {
        dispatch(addOneContact(values));
        formik.resetForm();
      }
    },
  });

  const { errors, touched } = formik;

  return (
    <CssVarsProvider>
      <Sheet
        onSubmit={formik.handleSubmit}
        component="form"
        sx={{
          width: 350,
          mx: 'auto',
          my: 4,
          py: 3,
          px: 2,
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          borderRadius: 'sx',
          boxShadow: 'md',
        }}
        variant="outlined"
      >
        <Typography sx={{ mx: 'auto' }} level="h5" component="h1">
          <b> Create new contact!</b>
        </Typography>

        <FormControl>
          <FormLabel>
            <PersonOutlineIcon sx={{ fontSize: 20, mr: 3 }} />
            <Typography sx={{ color: 'red', fontSize: 10 }}>
              {errors.name && touched.name ? errors.name : null}
            </Typography>
          </FormLabel>
          <Input
            placeholder="name"
            name="name"
            type="text"
            required
            onChange={formik.handleChange}
            value={formik.values.name}
          />
        </FormControl>
        <FormControl>
          <FormLabel>
            <TtyIcon sx={{ fontSize: 20, mr: 3 }} />
            <Typography sx={{ color: 'red', fontSize: 10 }}>
              {errors.number && touched.number ? errors.number : null}
            </Typography>
          </FormLabel>
          <Input
            name="number"
            type="tel"
            placeholder="number"
            required
            onChange={formik.handleChange}
            value={formik.values.number}
          />
        </FormControl>
        <Button
          type="submit"
          size="md"
          sx={theme => ({
            background: `linear-gradient(-45deg, ${theme.vars.palette.primary[800]}, ${theme.vars.palette.primary[500]})`,
            fontWeight: 'lg',
            '&:hover': {
              background: `linear-gradient(-45deg, ${theme.vars.palette.primary[900]}, ${theme.vars.palette.primary[600]})`,
            },
          })}
        >
          Add Contact <AddIcon sx={{ mx: 2 }} />
        </Button>
      </Sheet>
      <ToastContainer />
    </CssVarsProvider>
  );
};

export default ContactForm;

function settingAlert() {
  return {
    position: 'top-right',
    autoClose: 1700,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    theme: 'light',
  };
}
