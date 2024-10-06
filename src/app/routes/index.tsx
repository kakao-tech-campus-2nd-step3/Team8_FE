import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { RouterPath } from './path';
import MainPage from '@/pages/common/main';
import RegisterPage from '@/pages/common/register';
import SeniorRegisterPage from '@/pages/guard/register';
import SiniddoReviewPage from '@/pages/guard/review';
import ServiceHistoryPage from '@/pages/guard/service-history';
import CallBackDetailPage from '@/pages/siniddo/call-back/detail';
import CallBackListPage from '@/pages/siniddo/call-back/list';
import SiniddoGuideLinePage from '@/pages/siniddo/guide-line';
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
    path: RouterPath.helloCall,
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
  {
    path: RouterPath.seniorRegister,
    element: <SeniorRegisterPage />,
  },
  {
    path: RouterPath.callBackList,
    children: [
      {
        index: true,
        element: <CallBackListPage />,
      },
      {
        path: RouterPath.callBackDetail,
        children: [
          {
            index: true,
            element: <CallBackDetailPage />,
          },
          {
            path: RouterPath.callBackGuidLine,
            element: <SiniddoGuideLinePage />,
          },
        ],
      },
    ],
  },
  {
    path: RouterPath.siniddoReview,
    element: <SiniddoReviewPage />,
  },
]);

export const Routes = () => {
  return <RouterProvider router={router} />;
};
