import { Box, CircularProgress } from '@mui/material';

const Loader = ({ colorLoader = 'primary' }) => {



  return (
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <CircularProgress color={colorLoader} />
    </Box>
  );
};
export default Loader;
