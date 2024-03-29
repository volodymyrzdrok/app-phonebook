import { useDispatch } from 'react-redux';
import { changeFilterValue } from 'redux/contacts/contactsSlice';
import { CssVarsProvider, FormControl, FormLabel, Input } from '@mui/joy';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';

const Filter = () => {
  const dispatch = useDispatch();
  const changeFilterValueFunc = e => {
    const value = e.target.value.trim().toLowerCase();
    dispatch(changeFilterValue(value));
  };

  return (
    <CssVarsProvider>
      <FormControl
        sx={{
          width: 350,
          mx: 'auto',
          my: 4,
          py: 1,
          px: 2,
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          borderRadius: 'sx',
          boxShadow: 'md',
        }}
        variant="outlined"
      >
        <FormLabel>
          Filter Contacts
          <PersonSearchIcon
            sx={{
              fontSize: 30,
              mx: 3,
            }}
          />
        </FormLabel>
        <Input
          onInput={changeFilterValueFunc}
          type="text"
          placeholder="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          required
        />
      </FormControl>
    </CssVarsProvider>
  );
};

export default Filter;
