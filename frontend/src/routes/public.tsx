import namedLazyImport from '../utils/named-lazy-Import';

const { AuthRoutes } = namedLazyImport(
  () => import('../features/auth'),
  'AuthRoutes',
);

export const publicRoutes = [
  {
    path: '/auth/*',
    element: <AuthRoutes />,
  },
];
