import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getStatusAuth } from 'redux/slice';

export const useRouteRedirect = (statusBool, pathName) => {
  const navigate = useNavigate();
  const authStatus = useSelector(getStatusAuth);

  useEffect(() => {
    if (authStatus === statusBool) {
      navigate(pathName, { replace: true });
    }
  }, [navigate, authStatus, pathName,statusBool]);
};
