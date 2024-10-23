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
  HelloCallApplyPage,
  GuardMainPage,
  SinittoMainPage,
} from '@/pages';
import { Layout } from '@/shared/components';

export const router = createBrowserRouter([
  {
    path: RouterPath.ROOT,
    element: <MainPage />,
  },
  {
    path: RouterPath.SIGNUP,
    element: <Layout title='회원가입' />,
    children: [
      {
        index: true,
        element: <RegisterPage />,
      },
    ],
  },
  {
    path: RouterPath.REDIRECT,
    children: [
      {
        index: true,
        element: <RedirectPage />,
      },
    ],
  },
  {
    path: RouterPath.GUARD,
    children: [
      {
        index: true,
        element: <GuardMainPage />,
      },
      {
        element: <Layout title='가이드라인 목록' />,
        children: [
          {
            path: RouterPath.GUARD_GUIDELINE,
            element: <GuideLinePage />,
          },
        ],
      },
    ],
  },
  {
    path: RouterPath.SINITTO,
    children: [
      {
        index: true,
        element: <SinittoMainPage />,
      },
    ],
  },
  {
    path: RouterPath.SINITTO_MYPAGE,
    element: <Layout title='마이페이지' />,
    children: [
      {
        index: true,
        element: <SinittoMypage />,
      },
    ],
  },
  {
    path: RouterPath.GUARD_MYPAGE,
    element: <Layout title='마이페이지' />,
    children: [
      {
        index: true,
        element: <GuardMyPage />,
      },
    ],
  },
  {
    path: RouterPath.SERVICE_HISTORY,
    element: <Layout title='서비스 이용내역' />,
    children: [
      {
        index: true,
        element: <ServiceHistoryPage />,
      },
    ],
  },
  {
    path: RouterPath.HELLO_CALL,
    element: <Layout title='안부전화 서비스' />,
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
      {
        path: RouterPath.HELLO_CALL_GUARD_APPLY,
        element: <HelloCallApplyPage />,
      },
    ],
  },
  {
    path: RouterPath.SENIOR_REGISTER,
    element: <Layout title='시니어 등록하기' />,
    children: [
      {
        index: true,
        element: <SeniorRegisterPage />,
      },
    ],
  },
  {
    path: RouterPath.CALL_BACK_LIST,
    element: <Layout title='콜백 요청리스트' />,
    children: [{ index: true, element: <CallBackListPage /> }],
  },
  {
    path: RouterPath.CALL_BACK_LIST,
    element: <Layout title='요청 상세페이지' />,
    children: [
      {
        path: RouterPath.CALL_BACK_DETAIL,
        element: <CallBackDetailPage />,
      },
      {
        path: RouterPath.CALL_BACK_GUID_LINE,
        element: <SinittoGuideLinePage />,
      },
    ],
  },
  {
    path: RouterPath.SINITTO_REVIEW,
    element: <Layout title='시니또 평가하기' />,
    children: [
      {
        index: true,
        element: <SinittoReviewPage />,
      },
    ],
  },
]);

export const Routes = () => {
  return <RouterProvider router={router} />;
};
