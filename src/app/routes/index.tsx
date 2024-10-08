import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { RouterPath } from './path';
import MainPage from '@/pages/common/main';
import RegisterPage from '@/pages/common/register';
import SeniorRegisterPage from '@/pages/guard/register';
import SinittoReviewPage from '@/pages/guard/review';
import ServiceHistoryPage from '@/pages/guard/service-history';
import CallBackDetailPage from '@/pages/sinitto/call-back/detail';
import CallBackListPage from '@/pages/sinitto/call-back/list';
import SinittoGuideLinePage from '@/pages/sinitto/guide-line';
import HelloCallListPage from '@/pages/sinitto/hello-call/hello-call-list';
import HelloCallReportPage from '@/pages/sinitto/hello-call/hello-call-report';
import HelloCallServicePage from '@/pages/sinitto/hello-call/hello-call-service';
import MyPage from '@/pages/sinitto/mypage';

const router = createBrowserRouter([
  {
    path: RouterPath.ROOT,
    element: <MainPage />,
  },
  {
    path: RouterPath.REGISTER,
    element: <RegisterPage />,
  },
  {
    path: RouterPath.MYPAGE,
    element: <MyPage />,
  },
  {
    path: RouterPath.SERVICE_HISTORY,
    element: <ServiceHistoryPage />,
  },
  {
    path: RouterPath.HELLO_CALL,
    children: [
      {
        index: true,
        element: <HelloCallListPage />,
      },
      {
        path: RouterPath.HELLO_CALL_SERVICE,
        element: <HelloCallServicePage />,
      },
      {
        path: RouterPath.HELLO_CALL_REPORT,
        element: <HelloCallReportPage />,
      },
    ],
  },
  {
    path: RouterPath.SENIOR_REGISTER,
    element: <SeniorRegisterPage />,
  },
  {
    path: RouterPath.CALL_BACK_LIST,
    children: [
      {
        index: true,
        element: <CallBackListPage />,
      },
      {
        path: RouterPath.CALL_BACK_DETAIL,
        children: [
          {
            index: true,
            element: <CallBackDetailPage />,
          },
          {
            path: RouterPath.CALL_BACK_GUID_LINE,
            element: <SinittoGuideLinePage />,
          },
        ],
      },
    ],
  },
  {
    path: RouterPath.SINITTO_REVIEW,
    element: <SinittoReviewPage />,
  },
]);

export const Routes = () => {
  return <RouterProvider router={router} />;
};
