import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { RouterPath } from './path';
import RegisterPage from '@/pages/common/register';
import MainPage from '@/pages/common/main';

const router = createBrowserRouter([
  {
    path: RouterPath.root,
    element: <MainPage />,
  },
  {
    path: RouterPath.register,
    element: <RegisterPage />,
  },
]);

export const Routes = () => {
  return <RouterProvider router={router} />;
};
