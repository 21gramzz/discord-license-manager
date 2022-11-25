import { Outlet } from 'react-router-dom';
import React from 'react';
import { MainLayout } from '../components/Layout';
import namedLazyImport from '../utils/named-lazy-Import';

const { Licenses } = namedLazyImport(
  () => import('../features/licenses'),
  'Licenses',
);

const App = () => {
  return (
    <MainLayout>
      <React.Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </React.Suspense>
    </MainLayout>
  );
};

export const protectedRoutes = [
  {
    path: '/',
    element: <App />,
    children: [{ path: '/licenses', element: <Licenses /> }],
  },
];
