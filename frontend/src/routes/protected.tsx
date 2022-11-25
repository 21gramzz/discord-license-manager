import { Licenses } from '../features/licenses';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { MainLayout } from '../components/Layout';

const App = () => {
  return (
    <MainLayout>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
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
