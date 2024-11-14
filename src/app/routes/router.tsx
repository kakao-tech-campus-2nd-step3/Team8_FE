import { Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import {
  ProtectedRoute,
  GuardMainPage,
  RegisterPage,
  GuardMyPage,
  ServiceHistoryPage,
  GuardReportPage,
  SinittoReviewPage,
  ServiceManualPage,
  SeniorRegisterPage,
  GuideLinePage,
  HelloCallApplyPage,
  SinittoMainPage,
  SinittoMyPage,
  HelloCallListPage,
  HelloCallServicePage,
  HelloCallReportPage,
  CallBackListPage,
  CallBackDetailPage,
  SinittoGuideLinePage,
  SinittoServiceHistoryPage,
  HelloCallDetailPage,
} from './components';
import { RouterPath } from './path';
import { OnboardPage, RedirectPage, DummyRedirectPage } from '@/pages';
import { Layout, LoadingView } from '@/shared/components';

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
            element: (
              <Suspense fallback={<LoadingView />}>
                <RegisterPage />
              </Suspense>
            ),
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
            element: (
              <Suspense fallback={<LoadingView />}>
                <GuardMainPage />
              </Suspense>
            ),
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
                    element: (
                      <Suspense fallback={<LoadingView />}>
                        <GuardMyPage />
                      </Suspense>
                    ),
                  },
                ],
              },
              {
                path: RouterPath.SERVICE_MANUAL,
                element: (
                  <Suspense fallback={<LoadingView />}>
                    <ServiceManualPage />
                  </Suspense>
                ),
              },
              {
                element: <Layout title='내 시니어 관리' />,
                children: [
                  {
                    path: RouterPath.SENIOR_REGISTER,
                    element: (
                      <Suspense fallback={<LoadingView />}>
                        <SeniorRegisterPage />
                      </Suspense>
                    ),
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
                        element: (
                          <Suspense fallback={<LoadingView />}>
                            <ServiceHistoryPage />
                          </Suspense>
                        ),
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
                            element: (
                              <Suspense fallback={<LoadingView />}>
                                <GuardReportPage />
                              </Suspense>
                            ),
                          },
                          {
                            path: RouterPath.SINITTO_REVIEW,
                            element: (
                              <Suspense fallback={<LoadingView />}>
                                <SinittoReviewPage />
                              </Suspense>
                            ),
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
            element: (
              <Suspense fallback={<LoadingView />}>
                <GuideLinePage />
              </Suspense>
            ),
          },
        ],
      },
      {
        path: RouterPath.HELLO_CALL_GUARD_APPLY,
        element: <Layout title='안부전화 서비스 신청' />,
        children: [
          {
            index: true,
            element: (
              <Suspense fallback={<LoadingView />}>
                <HelloCallApplyPage />
              </Suspense>
            ),
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
            element: (
              <Suspense fallback={<LoadingView />}>
                <SinittoMainPage />
              </Suspense>
            ),
          },
        ],
      },
      {
        path: RouterPath.MYPAGE,
        element: <Layout title='마이페이지' />,
        children: [
          {
            index: true,
            element: (
              <Suspense fallback={<LoadingView />}>
                <SinittoMyPage />
              </Suspense>
            ),
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
                element: (
                  <Suspense fallback={<LoadingView />}>
                    <SinittoServiceHistoryPage />
                  </Suspense>
                ),
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
                element: (
                  <Suspense fallback={<LoadingView />}>
                    <CallBackListPage />
                  </Suspense>
                ),
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
                    element: (
                      <Suspense fallback={<LoadingView />}>
                        <CallBackDetailPage />
                      </Suspense>
                    ),
                  },
                ],
              },
              {
                path: RouterPath.CALL_BACK_GUID_LINE,
                element: <Layout title='요청 상세페이지' />,
                children: [
                  {
                    index: true,
                    element: (
                      <Suspense fallback={<LoadingView />}>
                        <SinittoGuideLinePage />
                      </Suspense>
                    ),
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
            element: (
              <Suspense fallback={<LoadingView />}>
                <HelloCallListPage />
              </Suspense>
            ),
          },
          {
            path: RouterPath.HELLO_CALL_SERVICE,
            element: (
              <Suspense fallback={<LoadingView />}>
                <HelloCallServicePage />
              </Suspense>
            ),
          },
          {
            path: RouterPath.HELLO_CALL_REPORT,
            element: (
              <Suspense fallback={<LoadingView />}>
                <HelloCallReportPage />
              </Suspense>
            ),
          },
          {
            path: RouterPath.HELLO_CALL_DETAIL,
            element: (
              <Suspense fallback={<LoadingView />}>
                <HelloCallDetailPage />
              </Suspense>
            ),
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
