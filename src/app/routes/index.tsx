import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { RouterPath } from './path';
import MainPage from '@/pages/common/main';
import RegisterPage from '@/pages/common/register';
import ServiceHistoryPage from '@/pages/guard/service-history';
import HelloCallListPage from '@/pages/siniddo/hello-call/hello-call-list';
import HelloCallReportPage from '@/pages/siniddo/hello-call/hello-call-report';
import HelloCallServicePage from '@/pages/siniddo/hello-call/hello-call-service';
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
  {
    path: RouterPath.serviceHistory,
    element: <ServiceHistoryPage />,
  },
  {
    path: RouterPath.helloCallList,
    children: [
      {
        index: true,
        element: <HelloCallListPage />,
      },
      {
        path: RouterPath.helloCallService,
        element: <HelloCallServicePage />,
      },
      {
        path: RouterPath.helloCallReport,
        element: <HelloCallReportPage />,
      },
    ],
  },
]);

export const Routes = () => {
  return <RouterProvider router={router} />;
};
