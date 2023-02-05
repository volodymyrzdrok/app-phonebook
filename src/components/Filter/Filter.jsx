import React from 'react';

// import { useDispatch } from 'react-redux';
// import { changeFilterValue } from '../../redux/slice';
import { CssVarsProvider, FormControl, FormLabel, Input } from '@mui/joy';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';

const Filter = props => {
  // const dispatch = useDispatch();

  // const changeFilterValueFunc = e => {
  //   const value = e.target.value.trim().toLowerCase();
  //   dispatch(changeFilterValue(value));
  // };

  return (
    <CssVarsProvider>
      <FormControl
        sx={{
          width: 350,
          mx: 'auto', // margin left & right
          my: 4, // margin top & botom
          py: 1, // padding top & bottom
          px: 2, // padding left & right
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

// <label htmlFor="" className={c.label}>
//   Find contact by name
//   <input
//     onInput={changeFilterValueFunc}
//     type="text"
//     pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//     title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//   />
// </label>
