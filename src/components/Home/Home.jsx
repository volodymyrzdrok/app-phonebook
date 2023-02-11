import imgPhonebook from '../../images/phonebook.webp';
import imgRegistration from '../../images/registration.webp';
import imgLogin from '../../images/login.webp';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Typography, Box, ButtonBase } from '@mui/material';
import routes from 'constants/routes';
import { NavLink } from 'react-router-dom';
import { selectAuthStatus } from 'redux/auth/authSlise';
import { useSelector } from 'react-redux';
// import { ToastContainer, toast } from 'react-toastify';

const ImageBackdrop = styled('div')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  background: '#000',
  opacity: 0.5,
  transition: theme.transitions.create('opacity'),
}));

const ImageIconButton = styled(ButtonBase)(({ theme }) => ({
  position: 'relative',
  display: 'block',
  padding: 0,
  borderRadius: 0,
  height: '40vh',
  [theme.breakpoints.down('md')]: {
    width: '100% !important',
    height: 100,
  },
  '&:hover': {
    zIndex: 1,
  },
  '&:hover .imageBackdrop': {
    opacity: 0.15,
  },
  '&:hover .imageMarked': {
    opacity: 0,
  },
  '&:hover .imageTitle': {
    border: '4px solid currentColor',
  },
  '& .imageTitle': {
    position: 'relative',
    padding: `${theme.spacing(2)} ${theme.spacing(4)} 14px`,
  },
  '& .imageMarked': {
    height: 3,
    width: 18,
    background: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
}));

const images = [
  {
    url: imgPhonebook,
    title: 'Phonebook',
    width: '40%',
    navig: routes.contacts,
  },
  {
    url: imgRegistration,
    title: 'Registration',
    width: '20%',
    navig: routes.register,
  },
  {
    url: imgLogin,
    title: 'Login',
    width: '40%',
    navig: routes.login,
  },
];

export default function Home() {
  const authStatus = useSelector(selectAuthStatus);
  return (
    <>
      <Typography
        sx={{ mt: 3 }}
        variant="h4"
        marked="center"
        align="center"
        component="h1"
      >
        <b>Welcome in application</b>
      </Typography>
      <Typography
        sx={{ mt: 1 }}
        variant="h5"
        marked="center"
        align="center"
        component="h2"
      >
        Please login or register for access
      </Typography>

      <Box sx={{ mt: 8, display: 'flex', flexWrap: 'wrap' }}>
        {images.map(image => (
          <ImageIconButton
            key={image.title}
            style={{
              width: image.width,
            }}
          >
            <Box
              sx={{
                position: 'absolute',
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                backgroundSize: 'cover',
                backgroundPosition: 'center 40%',
                backgroundImage: `url(${image.url})`,
              }}
            />
            <ImageBackdrop className="imageBackdrop" />
            <Box
              sx={{
                position: 'absolute',
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'common.white',
              }}
            >
              <Typography
                component={NavLink}
                to={
                  !authStatus && image.navig === routes.contacts
                    ? routes.home
                    : image.navig
                }
                variant="h6"
                color="inherit"
                className="imageTitle"
              >
                {image.title}
                <div className="imageMarked" />
              </Typography>
            </Box>
          </ImageIconButton>
        ))}
      </Box>
    </>
  );
}
