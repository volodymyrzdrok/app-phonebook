import { Box } from '@mui/system';
import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeContact, getContacts, getFilter } from '../../redux/slice';

import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import ModeEditOutlinedIcon from '@mui/icons-material/ModeEditOutlined';
import RemoveCircleOutlineOutlinedIcon from '@mui/icons-material/RemoveCircleOutlineOutlined';
import { IconButton, Typography } from '@mui/material';
import { Sheet } from '@mui/joy';

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const filterContacts = useMemo(() => {
    return contacts.filter(el => el.name.toLowerCase().includes(filter));
  }, [filter, contacts]);

  return (
    <Box component="ul">
      {filterContacts.map(({ id, name, number }) => (
        <Sheet
          key={id}
          component="li"
          sx={{
            width: 580,
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
          }}
          variant="outlined"
        >
          <PersonOutlinedIcon />

          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Typography
              level="h6"
              component="p"
              sx={{
                width: 200,
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
                width: 200,
              }}
            >
              {number}
            </Typography>
          </Box>
          <div>
            <IconButton color="primary" aria-label="delete" disabled>
              <ModeEditOutlinedIcon />
            </IconButton>
            <IconButton
              color="primary"
              aria-label="delete"
              onClick={() => dispatch(removeContact(id))}
            >
              <RemoveCircleOutlineOutlinedIcon />
            </IconButton>
          </div>
        </Sheet>
      ))}
    </Box>
  );
};

export default ContactList;
