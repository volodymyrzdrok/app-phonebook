import { Box } from '@mui/system';
import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { removeContact, getContacts, getFilter } from '../../redux/slice';

import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import ModeEditOutlinedIcon from '@mui/icons-material/ModeEditOutlined';
import RemoveCircleOutlineOutlinedIcon from '@mui/icons-material/RemoveCircleOutlineOutlined';
import { IconButton, Typography } from '@mui/material';
import { Sheet } from '@mui/joy';

const ContactList = () => {
  // const contacts = useSelector(getContacts);
  // const filter = useSelector(getFilter);
  // const dispatch = useDispatch();
  // const filterContacts = useMemo(() => {
  //   return contacts.filter(el => el.name.toLowerCase().includes(filter));
  // }, [filter, contacts]);

  return (
    <Box component="ul">
      <Sheet
        component="li"
        sx={{
          width: 580,
          mx: 'auto', // margin left & right
          my: 1, // margin top & botom
          py: 1, // padding top & bottom
          px: 2, // padding left & right
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',

          gap: 1,
          // border: 1,
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
            }}
          >
            <b>Volodu Zwefdwwwefrok</b>:
          </Typography>
          <Typography
            level="p"
            component="p"
            sx={{
              width: 200,
            }}
          >
            3808085493689043
          </Typography>
        </Box>
        <div>
          <IconButton color="primary" aria-label="delete">
            <ModeEditOutlinedIcon />
          </IconButton>
          <IconButton color="primary" aria-label="delete">
            <RemoveCircleOutlineOutlinedIcon />
          </IconButton>
        </div>
      </Sheet>
      <Sheet
        component="li"
        sx={{
          width: 580,
          mx: 'auto', // margin left & right
          my: 1, // margin top & botom
          py: 1, // padding top & bottom
          px: 2, // padding left & right
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',

          gap: 1,
          // border: 1,
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
            }}
          >
            <b>Volodu Zwefdwwwefrok</b>:
          </Typography>
          <Typography
            level="p"
            component="p"
            sx={{
              width: 200,
            }}
          >
            3808085493689043
          </Typography>
        </Box>
        <div>
          <IconButton color="primary" aria-label="delete">
            <ModeEditOutlinedIcon />
          </IconButton>
          <IconButton color="primary" aria-label="delete">
            <RemoveCircleOutlineOutlinedIcon />
          </IconButton>
        </div>
      </Sheet>
      <Sheet
        component="li"
        sx={{
          width: 580,
          mx: 'auto', // margin left & right
          my: 1, // margin top & botom
          py: 1, // padding top & bottom
          px: 2, // padding left & right
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',

          gap: 1,
          // border: 1,
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
            }}
          >
            <b>Volodu Zwefdwwwefrok</b>:
          </Typography>
          <Typography
            level="p"
            component="p"
            sx={{
              width: 200,
            }}
          >
            3808085493689043
          </Typography>
        </Box>
        <div>
          <IconButton color="primary" aria-label="delete">
            <ModeEditOutlinedIcon />
          </IconButton>
          <IconButton color="primary" aria-label="delete">
            <RemoveCircleOutlineOutlinedIcon />
          </IconButton>
        </div>
      </Sheet>
    </Box>
  );
};

export default ContactList;
// return (
//   <ul className={c.list}>
//     {filterContacts.map(({ id, name, number }) => (
//       <li className={c.item} key={id}>
//         <p>{name}</p>
//         <p>{number}</p>
//         <button className={c.btn} onClick={() => dispatch(removeContact(id))}>
//           delete
//         </button>
//       </li>
//     ))}
//   </ul>
// );
