import { Typography, Link } from '@mui/material';
import { Sheet } from '@mui/joy';

const Footer = () => {
  return (
    <Sheet
      sx={{
        borderTop: 1,
        borderColor: 'divider',
        height: 30,
        mt: 4,
        py: 1,
        textAlign: 'center',
      }}
      component="footer"
    >
      <Typography
        component="p"
        sx={{
          fontSize: 13,
        }}
      >
        Copyright ©
        <Link
          sx={{
            mx: 1,
          }}
          href="https://github.com/volodymyrzdrok/app-phonebook"
        >
          this reposotory
        </Link>
        2023.
      </Typography>
    </Sheet>
  );
};
export default Footer;
