import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { RouterPath } from './path';
import MainPage from '@/pages/common/main';
import RegisterPage from '@/pages/common/register';
import GuideLinePage from '@/pages/guard/guide-line';
import GuardMyPage from '@/pages/guard/mypage';
import SeniorRegisterPage from '@/pages/guard/register';
import SiniddoReviewPage from '@/pages/guard/review';
import ServiceHistoryPage from '@/pages/guard/service-history';
import CallBackDetailPage from '@/pages/siniddo/call-back/detail';
import CallBackListPage from '@/pages/siniddo/call-back/list';
import SiniddoGuideLinePage from '@/pages/siniddo/guide-line';
import HelloCallListPage from '@/pages/siniddo/hello-call/hello-call-list';
import HelloCallReportPage from '@/pages/siniddo/hello-call/hello-call-report';
import HelloCallServicePage from '@/pages/siniddo/hello-call/hello-call-service';
import SinittoMypage from '@/pages/siniddo/mypage';

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
    path: RouterPath.SINITTO_MYPAGE,
    element: <SinittoMypage />,
  },
  {
    path: RouterPath.GUARD_MYPAGE,
    element: <GuardMyPage />,
  },
  {
    path: RouterPath.GUARD_GUIDELINE,
    element: <GuideLinePage />,
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
            element: <SiniddoGuideLinePage />,
          },
        ],
      },
    ],
  },
  {
    path: RouterPath.SINIDDO_REVIEW,
    element: <SiniddoReviewPage />,
  },
]);

export const Routes = () => {
  return <RouterProvider router={router} />;
};
