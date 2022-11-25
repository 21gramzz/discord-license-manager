import { useRoutes } from 'react-router-dom';
import { publicRoutes } from './public';
import { protectedRoutes } from './protected';
import storage from '../utils/storage';
import { useReactiveVar } from '@apollo/client';
import { useNavigate } from 'react-router-dom';
import { apiErrorsVar } from '../apollo/global-vars';
import { useEffect } from 'react';
import { Licenses } from '../features/licenses';

export const AppRoutes = () => {
  const navigate = useNavigate();
  const apiErrors = useReactiveVar(apiErrorsVar);

  useEffect(() => {
    const isUnauthorized = apiErrors.some((err) => {
      return err?.extensions?.code === 'UNAUTHENTICATED';
    });
    if (isUnauthorized) {
      storage.clearToken();
      apiErrorsVar([]);
      navigate('/auth/login');
    }
  }, [apiErrors, navigate]);

  let baseRoutes = [{ path: '/', element: <Licenses /> }, ...publicRoutes];

  if (storage.getToken()) {
    baseRoutes = [...baseRoutes, ...protectedRoutes];
  }

  const element = useRoutes(baseRoutes);
  return <>{element}</>;
};
