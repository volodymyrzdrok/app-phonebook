import routes from 'constants/routes';
import { useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import { lazy } from 'react';
import { getUserCurrent } from 'redux/auth/authOperations';
import { useDispatch, useSelector } from 'react-redux';
import { selectAuthStatus } from 'redux/auth/authSlise';

const Home = lazy(() => import('./Home/Home'));
const Contacts = lazy(() => import('pages/Contacts/Contacts'));
const Login = lazy(() => import('pages/Login/Login'));
const Register = lazy(() => import('pages/Register/Register'));

const PrivateRoute = ({ component, redirectTo = routes.home }) => {
  const isAuth = useSelector(selectAuthStatus);

  return isAuth ? component : <Navigate to={redirectTo} />;
};

const PublicRoute = ({ redirectTo = routes.home, component }) => {
  const isAuth = useSelector(selectAuthStatus);

  return !isAuth ? component : <Navigate to={redirectTo} />;
};

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserCurrent());
  }, [dispatch]);

  return (
    <Routes>
      <Route path={routes.home} element={<Layout />}>
        <Route index element={<Home />} />
        <Route
          path={routes.contacts}
          element={<PrivateRoute component={<Contacts />} />}
        />
        <Route
          path={routes.login}
          element={<PublicRoute component={<Login />} />}
        />
        <Route
          path={routes.register}
          element={<PublicRoute component={<Register />} />}
        />
        <Route path="*" element={<Navigate to={routes.home} replace />} />
      </Route>
    </Routes>
  );
};

export default App;
