import {
  Toolbar,
  Typography,
  Button,
  Stack,
  FormControlLabel,
  Switch,
} from '@mui/material';
import routes from 'constants/routes';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Box } from '@mui/system';
import { logoutUser } from 'redux/auth/authOperations';
import { selectAuthStatus, selectUserName } from 'redux/auth/authSlise';
import { ToastContainer, toast } from 'react-toastify';
import { resetContactState } from 'redux/contacts/contactsSlice';

const Header = () => {
  const authStatus = useSelector(selectAuthStatus);
  const userName = useSelector(selectUserName);

  const dispatch = useDispatch();

  const handleChange = e => {
    dispatch(logoutUser());
    dispatch(resetContactState());
  };

  return (
    <Toolbar sx={{ borderBottom: 1, borderColor: 'divider' }} component="nav">
      <Button
        component={NavLink}
        to={routes.home}
        size="small"
        style={isActiveFunc()}
      >
        Home
      </Button>

      {authStatus ? (
        <Typography
          component={NavLink}
          to={routes.contacts}
          color="primary"
          variant="h6"
          align="center"
          noWrap
          sx={{ flex: 1 }}
          style={isActiveFunc()}
        >
          Phonebook
        </Typography>
      ) : (
        <>
          <Typography
            onClick={() =>
              toast.info('Please login or register for access', settingAlert())
            }
            color="primary"
            variant="h6"
            component="a"
            align="center"
            noWrap
            sx={{ flex: 1 }}
          >
            Phonebook
          </Typography>
          <ToastContainer />
        </>
      )}

      {!authStatus ? (
        <Stack spacing={2} direction={'row'}>
          <Button
            component={NavLink}
            to={routes.register}
            variant="outlined"
            size="small"
            style={isActiveFunc()}
          >
            Sign up
          </Button>
          <Button
            component={NavLink}
            to={routes.login}
            variant="outlined"
            size="small"
            style={isActiveFunc()}
          >
            Sign in
          </Button>
        </Stack>
      ) : (
        <Box>
          <FormControlLabel
            control={
              <Switch
                checked={authStatus}
                onChange={handleChange}
                aria-label="login switch"
              />
            }
            label={authStatus ? 'Logout' : 'Login'}
          />
          <Typography
            sx={{ ml: 6, textTransform: 'capitalize' }}
            variant="caption"
            display="block"
            gutterBottom
          >
            {userName}
          </Typography>
        </Box>
      )}
    </Toolbar>
  );
};

export default Header;

function isActiveFunc() {
  return ({ isActive }) =>
    isActive
      ? {
          fontWeight: 900,
          filter: 'drop-shadow(5px 5px 5px rgba(0,0,0,0.5))',
        }
      : {};
}

function settingAlert() {
  return {
    position: 'top-center',
    autoClose: 1300,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    theme: 'light',
  };
}
