import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { RouterPath } from './path';
import HomePage from '@/components/home';

const router = createBrowserRouter([
  {
    path: RouterPath.root,
    element: <HomePage />,
  },
]);

export const Routes = () => {
  return <RouterProvider router={router} />;
};
