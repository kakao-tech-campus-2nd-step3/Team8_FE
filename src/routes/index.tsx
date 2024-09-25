import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { RouterPath } from './path';
import MainPage from '@/pages/common/main';

const router = createBrowserRouter([
  {
    path: RouterPath.root,
    element: <MainPage />,
  },
]);

export const Routes = () => {
  return <RouterProvider router={router} />;
};
