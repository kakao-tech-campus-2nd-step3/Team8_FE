import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { RouterPath } from './path';
import HomePage from '@/components/home';
import RegisterPage from '@/pages/common/register';

const router = createBrowserRouter([
  {
    path: RouterPath.root,
    element: <HomePage />,
  },
  {
    path: RouterPath.register,
    element: <RegisterPage />,
  },
]);

export const Routes = () => {
  return <RouterProvider router={router} />;
};
