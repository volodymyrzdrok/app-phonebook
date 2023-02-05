import {
  Toolbar,
  Typography,
  Button,
  Stack,
  FormControlLabel,
  Switch,
} from '@mui/material';
import routes from 'constants/routes';
// import styles from './Header.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getStatusAuth, logOut } from '../../redux/slice';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const authStatus = useSelector(getStatusAuth);
  const dispatch = useDispatch();

  const handleChange = e => {
    dispatch(logOut());
  };

  return (
    <Toolbar sx={{ borderBottom: 1, borderColor: 'divider' }} component="nav">
      <Button component={NavLink} to={routes.home} size="small">
        Home
      </Button>

      <Typography
        component={NavLink}
        to={routes.contacts}
        // color="primary"
        variant="h6"
        color="inherit"
        align="center"
        noWrap
        sx={{ flex: 1 }}
      >
        Phonebook
      </Typography>

      {!authStatus ? (
        <Stack spacing={2} direction={'row'}>
          <Button
            component={NavLink}
            to={routes.register}
            variant="outlined"
            size="small"
          >
            Sign up
          </Button>
          <Button
            component={NavLink}
            to={routes.login}
            variant="outlined"
            size="small"
          >
            Sign in
          </Button>
        </Stack>
      ) : (
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
      )}
    </Toolbar>
  );
};

export default Header;
