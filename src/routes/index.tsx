import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { RouterPath } from './path';
import MainPage from '@/pages/common/main';
import RegisterPage from '@/pages/common/register';
import MyPage from '@/pages/siniddo/mypage';

const router = createBrowserRouter([
  {
    path: RouterPath.root,
    element: <MainPage />,
  },
  {
    path: RouterPath.register,
    element: <RegisterPage />,
  },
  {
    path: RouterPath.mypage,
    element: <MyPage />,
  },
]);

export const Routes = () => {
  return <RouterProvider router={router} />;
};
