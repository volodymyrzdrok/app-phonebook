import Contacts from 'pages/Contacts/Contacts';
import routes from 'constants/routes';
import Login from 'pages/Login/Login';
import Register from 'pages/Register/Register';
import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from './Home/Home';
import Layout from './Layout/Layout';

const App = () => {
  return (
    <Routes>
      <Route path={routes.home} element={<Layout />}>
        <Route index element={<Home />} />
        <Route path={routes.contacts} element={<Contacts />} />
        <Route path={routes.login} element={<Login />} />
        <Route path={routes.register} element={<Register />} />
        <Route path="*" element={<Navigate to={routes.home} replace />} />
      </Route>
    </Routes>
  );
};

export default App;
