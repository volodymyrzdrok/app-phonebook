import { Box } from '@mui/system';
import { useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import ModeEditOutlinedIcon from '@mui/icons-material/ModeEditOutlined';
import RemoveCircleOutlineOutlinedIcon from '@mui/icons-material/RemoveCircleOutlineOutlined';
import { IconButton, Typography } from '@mui/material';
import { Sheet } from '@mui/joy';
import UpdateModal from 'components/UpdateModal/UpdateModal';
import { removeOneContact } from 'redux/contacts/contactsOperations';
import Loader from 'components/Loader/Loader';
import {
  selectContacts,
  selectFilter,
  selectLoadingContacts,
} from 'redux/contacts/contactsSlice';

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const isLoading = useSelector(selectLoadingContacts);
  const dispatch = useDispatch();

  const [openModal, setOpenModal] = useState(false);
  const [contactObj, setUserDataModal] = useState(null);

  const handleOpen = objContact => {
    setUserDataModal(objContact);
    setOpenModal(true);
  };

  const handleClose = () => {
    setOpenModal(false);
    setUserDataModal(null);
  };

  const filterContacts = useMemo(() => {
    return contacts.filter(el => el.name.toLowerCase().includes(filter));
  }, [filter, contacts]);

  return (
    <>
      <Box component="ul">
        {isLoading ? (
          <Loader />
        ) : (
          filterContacts.map(({ id, name, number }) => (
            <Sheet
              key={id}
              component="li"
              sx={{
                width: 520,
                mx: 'auto',
                my: 1,
                py: 1,
                px: 2,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: 1,
                borderRadius: 'sm',
                boxShadow: 'sx',
                position: 'relative',
              }}
              variant="outlined"
            >
              <PersonOutlinedIcon />
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',

                  // добавити медіазапит !!!
                  //
                }}
              >
                <Typography
                  level="h6"
                  component="p"
                  sx={{
                    width: 220,
                    textAlign: 'center',
                    textTransform: 'capitalize',
                  }}
                >
                  <b>{name}</b>:
                </Typography>
                <Typography
                  level="p"
                  component="p"
                  sx={{
                    width: 170,
                  }}
                >
                  {number}
                </Typography>
              </Box>
              <div>
                <IconButton
                  color="primary"
                  aria-label="delete"
                  onClick={() => {
                    handleOpen({ id, name, number });
                  }}
                >
                  <ModeEditOutlinedIcon />
                </IconButton>
                <IconButton
                  color="primary"
                  aria-label="delete"
                  onClick={() => dispatch(removeOneContact(id))}
                >
                  <RemoveCircleOutlineOutlinedIcon />
                </IconButton>
              </div>
            </Sheet>
          ))
        )}
      </Box>
      {openModal && (
        <UpdateModal
          contactObj={contactObj}
          openModal={openModal}
          handleClose={handleClose}
        />
      )}
    </>
  );
};

export default ContactList;
