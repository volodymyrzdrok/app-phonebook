import  { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Container from '@mui/material/Container';
import { StyledEngineProvider } from '@mui/material/styles';
import styles from './Layout.module.css';
import Footer from 'components/Footer/Footer';
import Loader from 'components/Loader/Loader';

const Layout = () => {
  return (
    <StyledEngineProvider injectFirst>
      <Container maxWidth="lg">
        <header>
          <Header />
        </header>
        <main className={styles.main}>
           <Suspense fallback={<Loader/>}><Outlet /></Suspense>
        </main>
        <Footer />
      </Container>
    </StyledEngineProvider>
  );
};

export default Layout;
