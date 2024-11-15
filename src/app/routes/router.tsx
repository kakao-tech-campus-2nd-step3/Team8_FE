import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { ProtectedRoute } from './components';
import { RouterPath } from './path';
import {
  OnboardPage,
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
  DummyRedirectPage,
  SinittoServiceHistoryPage,
  HelloCallDetailPage,
  GuardReportPage,
  ServiceManualPage,
} from '@/pages';
import { Layout } from '@/shared/components';

export const router = createBrowserRouter([
  {
    path: RouterPath.ROOT,
    element: <ProtectedRoute />,
    children: [
      {
        path: '',
        children: [
          {
            index: true,
            element: <OnboardPage />,
          },
        ],
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
    ],
  },
  {
    path: RouterPath.GUARD,
    element: <ProtectedRoute requiresAuth guardOnly />,
    children: [
      {
        path: '',
        children: [
          {
            index: true,
            element: <GuardMainPage />,
          },
        ],
      },
      {
        path: RouterPath.MYPAGE,
        children: [
          {
            children: [
              {
                element: <Layout title='마이페이지' />,
                children: [
                  {
                    index: true,
                    element: <GuardMyPage />,
                  },
                ],
              },
              {
                path: RouterPath.SERVICE_MANUAL,
                element: <ServiceManualPage />,
              },
              {
                element: <Layout title='내 시니어 관리' />,
                children: [
                  {
                    path: RouterPath.SENIOR_REGISTER,
                    element: <SeniorRegisterPage />,
                  },
                ],
              },
            ],
          },
          {
            path: RouterPath.SERVICE_HISTORY,
            children: [
              {
                children: [
                  {
                    element: <Layout title='서비스 이용내역' />,
                    children: [
                      {
                        index: true,
                        element: <ServiceHistoryPage />,
                      },
                    ],
                  },
                  {
                    path: RouterPath.GUARD_HELLO_CALL_REPORT,
                    children: [
                      {
                        element: <Layout title='보고서 확인 및 시니또 평가' />,
                        children: [
                          {
                            index: true,
                            element: <GuardReportPage />,
                          },
                          {
                            path: RouterPath.SINITTO_REVIEW,
                            element: <SinittoReviewPage />,
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
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
      // {
      //   // TODO: 이 페이지도 수정이 필요함.
      //   path: RouterPath.CALL_BACK_GUID_LINE,
      //   element: <Layout title='가이드라인' />,
      //   children: [
      //     {
      //       index: true,
      //       element: <SinittoGuideLinePage />,
      //     },
      //   ],
      // },
      {
        path: RouterPath.HELLO_CALL_GUARD_APPLY,
        element: <Layout title='안부전화 서비스 신청' />,
        children: [
          {
            index: true,
            element: <HelloCallApplyPage />,
          },
        ],
      },
    ],
  },
  {
    path: RouterPath.SINITTO,
    element: <ProtectedRoute requiresAuth sinittoOnly />,
    children: [
      {
        element: <Layout SinittoHome />,
        children: [
          {
            index: true,
            element: <SinittoMainPage />,
          },
        ],
      },
      {
        path: RouterPath.MYPAGE,
        element: <Layout title='마이페이지' />,
        children: [
          {
            index: true,
            element: <SinittoMypage />,
          },
        ],
      },
      {
        path: RouterPath.SINITTO_SERVICE_HISTORY,
        children: [
          {
            path: '',
            element: <Layout title='서비스 신청내역' />,
            children: [
              {
                index: true,
                element: <SinittoServiceHistoryPage />,
              },
            ],
          },
        ],
      },
      {
        path: RouterPath.CALL_BACK_LIST,
        children: [
          {
            path: '',
            element: <Layout title='콜백 요청리스트' />,
            children: [
              {
                index: true,
                element: <CallBackListPage />,
              },
            ],
          },
          {
            path: RouterPath.CALL_BACK_DETAIL,
            children: [
              {
                path: '',
                element: <Layout title='요청 상세페이지' />,
                children: [
                  {
                    index: true,
                    element: <CallBackDetailPage />,
                  },
                ],
              },
              {
                path: RouterPath.CALL_BACK_GUID_LINE,
                element: <Layout title='요청 상세페이지' />,
                children: [
                  {
                    index: true,
                    element: <SinittoGuideLinePage />,
                  },
                ],
              },
            ],
          },
        ],
      },

      {
        path: RouterPath.HELLO_CALL,
        element: <Layout title='안부전화 서비스' />,
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
          {
            path: RouterPath.HELLO_CALL_DETAIL,
            element: <HelloCallDetailPage />,
          },
        ],
      },
    ],
  },
  {
    path: RouterPath.DUMMY_LOGIN,
    element: <Layout title='더미 로그인 Redirect' />,
    children: [
      {
        index: true,
        element: <DummyRedirectPage />,
      },
    ],
  },
]);

export const Routes = () => {
  return <RouterProvider router={router} />;
};
