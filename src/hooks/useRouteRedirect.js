import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { selectAuthStatus } from 'redux/auth/authSlise';

export const useRouteRedirect = (statusBool, pathName) => {
  const navigate = useNavigate();
  const authStatus = useSelector(selectAuthStatus);

  useEffect(() => {
    if (authStatus === statusBool) {
      navigate(pathName, { replace: true });
    }
  }, [navigate, authStatus, pathName, statusBool]);
};
