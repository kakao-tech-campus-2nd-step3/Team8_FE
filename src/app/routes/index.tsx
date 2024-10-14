import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { RouterPath } from './path';
import {
  MainPage,
  RegisterPage,
  RedirectPage,
  SinittoMypage,
  GuardMyPage,
  GuideLinePage,
  ServiceHistoryPage,
  HelloCallListPage,
  HelloCallServicePage,
  HelloCallReportPage,
  SeniorRegisterPage,
  CallBackListPage,
  CallBackDetailPage,
  SinittoGuideLinePage,
  SinittoReviewPage,
} from '@/pages';
import { Layout } from '@/shared/components';

const router = createBrowserRouter([
  {
    path: RouterPath.ROOT,
    element: <MainPage />,
  },
  {
    path: RouterPath.ROOT,
    element: <Layout />,
    children: [
      { path: RouterPath.SIGNUP, element: <RegisterPage /> },
      { path: RouterPath.REDIRECT, element: <RedirectPage /> },
      { path: RouterPath.SINITTO_MYPAGE, element: <SinittoMypage /> },
      { path: RouterPath.GUARD_MYPAGE, element: <GuardMyPage /> },
      { path: RouterPath.GUARD_GUIDELINE, element: <GuideLinePage /> },
      { path: RouterPath.SERVICE_HISTORY, element: <ServiceHistoryPage /> },
      {
        path: RouterPath.HELLO_CALL,
        children: [
          { index: true, element: <HelloCallListPage /> },
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
      { path: RouterPath.SENIOR_REGISTER, element: <SeniorRegisterPage /> },
      {
        path: RouterPath.CALL_BACK_LIST,
        children: [
          { index: true, element: <CallBackListPage /> },
          {
            path: RouterPath.CALL_BACK_DETAIL,
            children: [
              { index: true, element: <CallBackDetailPage /> },
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
    ],
  },
]);

export const Routes = () => {
  return <RouterProvider router={router} />;
};
