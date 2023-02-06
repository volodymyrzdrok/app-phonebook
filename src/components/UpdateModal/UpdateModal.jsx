import Box from '@mui/material/Box';

import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { FormControl, IconButton, Input, InputLabel } from '@mui/material';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import { getContacts,  } from 'redux/slice';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import fetchOneContact from 'services/fetchOneContact';
import Loader from 'components/Loader/Loader';
import { updateContact } from 'redux/operations';


export default function UpdateModal({ openModal, handleClose, contactId }) {
  console.log('зaпустили модал ', contactId)
  
  // const contacts = useSelector(getContacts);

  const [contactObj, setContactObj] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchOneContact(contactId).then(setContactObj)
  }, [contactId])


  const onUpdateContact = e => {
    e.preventDefault();
    const id = contactObj.id;
    const createdAt = new Date()
    const name = e.target.name.value.trim();
    const number = e.target.number.value.trim();

    // const indexPotion = contacts.findIndex(el => el.id === id);

    // if (indexPotion === -1) {
    //   alert(`${name} not found in contacts`);
    // } else {
    dispatch(updateContact({ id,createdAt, name, number }));
    e.target.reset();
    handleClose();
    // }
  };

  return <>{ contactObj && <Modal
    open={openModal}
    onClose={handleClose}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
  >
  <Box
      sx={style()}
      component="form"
      onSubmit={onUpdateContact}
    // data-contactid={userData.id}
    >
      <Typography sx={{ mb: 2 }} level="h6" color="primary" component="h2">
        <b> Edit contact</b>
      </Typography>
      <Box>
        <FormControl variant="standard">
          <InputLabel htmlFor="name">Name</InputLabel>
          <Input
            id="name"
            defaultValue={ contactObj?.name}
             
            name="name"
            type="text"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            required
          />
        </FormControl>
        <FormControl variant="standard" sx={{ mx: 2 }}>
          <InputLabel htmlFor="number">Number</InputLabel>
          <Input
            id="number"
            defaultValue={ contactObj.number}
            name="number"
            type="tel"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            required
          />
        </FormControl>
        <IconButton color="primary" aria-label="edit" type="submit">
          <BorderColorIcon sx={{ fontSize: 30 }} />
        </IconButton>
      </Box>
    </Box>
  </Modal>}</>

}

function style() {
  return {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 450,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
}
