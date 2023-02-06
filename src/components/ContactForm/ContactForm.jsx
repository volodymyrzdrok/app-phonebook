import { useDispatch, useSelector } from 'react-redux';
import {  getContacts } from '../../redux/slice';
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
import { addOneContact } from 'redux/operations';

const ContactForm = () => {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const onSubmitForm = e => {
    e.preventDefault();
    const name = e.target.name.value.trim();
    const number = e.target.number.value.trim();
    const createdAt =new Date()
    // console.log('createdAt', createdAt);
    
    const foundEl = contacts.find(
      el => el.name.toLowerCase() === name.toLowerCase()
    );
    if (foundEl) {
      alert(`${foundEl.name} is already in contacts`);
    } else {
      dispatch(addOneContact({name,number,createdAt}))
      // dispatch(addContact({ name, number }));

      e.target.reset();
    }
  };
  return (
    <CssVarsProvider>
      <Sheet
        onSubmit={onSubmitForm}
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
            <PersonOutlineIcon sx={{ fontSize: 20 }} />
          </FormLabel>
          <Input
            placeholder="name"
            name="name"
            type="text"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            required
          />
        </FormControl>
        <FormControl>
          <FormLabel>
            <TtyIcon sx={{ fontSize: 20 }} />
          </FormLabel>
          <Input
            name="number"
            type="tel"
            placeholder="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            required
          />
        </FormControl>
        <Button
          type="submit"
          size="md"
          sx={theme => ({
            background: `linear-gradient(-45deg, ${theme.vars.palette.primary[800]}, ${theme.vars.palette.primary[500]})`,
            fontWeight: 'lg', // short-hand syntax, same as `theme.fontWeight.lg`
            '&:hover': {
              background: `linear-gradient(-45deg, ${theme.vars.palette.primary[900]}, ${theme.vars.palette.primary[600]})`,
            },
          })}
        >
          Add Contact <AddIcon sx={{ mx: 2 }} />
        </Button>
      </Sheet>
    </CssVarsProvider>
  );
};

export default ContactForm;

// <form className={c.form} onSubmit={onSubmitForm}>
//   <label htmlFor="" className={c.label}>
//     name
//     <input
//       className={c.nameInput}
//       type="text"
//       name="name"
//       pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//       title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//       required
//     />
//   </label>
//   <label htmlFor="" className={c.label}>
//     number
//     <input
//       className={c.numberInput}
//       type="tel"
//       name="number"
//       pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//       title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//       required
//     />
//   </label>
//   <button className={c.formBtn}>Add contact</button>
// </form>
