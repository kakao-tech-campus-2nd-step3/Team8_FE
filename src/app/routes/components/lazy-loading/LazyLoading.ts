import { lazy } from 'react';

export const RegisterPage = lazy(
  () => import('@/pages/common/register/ui/RegisterPage')
);
export const GuardMainPage = lazy(() =>
  import('@/pages/guard/guard-main/ui/GuardMainPage').then((module) => ({
    default: module.GuardMainPage,
  }))
);

export const ServiceHistoryPage = lazy(() =>
  import('@/pages/guard/service-history/ui/ServiceHistoryPage').then(
    (module) => ({
      default: module.ServiceHistoryPage,
    })
  )
);

export const GuardMyPage = lazy(() =>
  import('@/pages/guard/mypage/ui/GuardMyPage').then((module) => ({
    default: module.GuardMyPage,
  }))
);

export const GuardReportPage = lazy(
  () => import('@/pages/guard/hello-call-report/ui/GuardReportPage')
);

export const SinittoReviewPage = lazy(() =>
  import('@/pages/guard/review/ui/SinittoReviewPage').then((module) => ({
    default: module.SinittoReviewPage,
  }))
);

export const ServiceManualPage = lazy(
  () => import('@/pages/common/service-manual/ui/ServiceManualPage')
);

export const SeniorRegisterPage = lazy(
  () => import('@/pages/guard/register/ui/SeniorRegisterPage')
);

export const GuideLinePage = lazy(() =>
  import('@/pages/guard/guide-line/ui/GuideLinePage').then((module) => ({
    default: module.GuideLinePage,
  }))
);

export const HelloCallApplyPage = lazy(() =>
  import('@/pages/guard/hello-call-apply/ui/HelloCallApplyPage').then(
    (module) => ({
      default: module.HelloCallApplyPage,
    })
  )
);

export const SinittoMainPage = lazy(() =>
  import('@/pages/sinitto/sinitto-main/ui/SinittoMainPage').then((module) => ({
    default: module.SinittoMainPage,
  }))
);

export const SinittoMyPage = lazy(() =>
  import('@/pages/sinitto/mypage/ui/SinittoMyPage').then((module) => ({
    default: module.SinittoMyPage,
  }))
);

export const HelloCallListPage = lazy(
  () => import('@/pages/sinitto/hello-call-list/ui/HelloCallListPage')
);

export const HelloCallServicePage = lazy(
  () => import('@/pages/sinitto/hello-call-service/ui/HelloCallServicePage')
);

export const HelloCallReportPage = lazy(
  () => import('@/pages/sinitto/hello-call-report/ui/HelloCallReportPage')
);

export const CallBackListPage = lazy(
  () => import('@/pages/sinitto/call-back/list/ui/CallBackListPage')
);

export const CallBackDetailPage = lazy(() =>
  import('@/pages/sinitto/call-back/detail/ui/CallBackDetailPage').then(
    (module) => ({
      default: module.CallBackDetailPage,
    })
  )
);

export const SinittoGuideLinePage = lazy(() =>
  import('@/pages/sinitto/guide-line/ui/SinittoGuideLinePage').then(
    (module) => ({
      default: module.SinittoGuideLinePage,
    })
  )
);

export const SinittoServiceHistoryPage = lazy(() =>
  import('@/pages/sinitto/service-history/ui/SinittoServiceHistoryPage').then(
    (module) => ({
      default: module.SinittoServiceHistoryPage,
    })
  )
);

export const HelloCallDetailPage = lazy(() =>
  import('@/pages/sinitto/hello-call-detail/ui/HelloCallDetailPage').then(
    (module) => ({
      default: module.HelloCallDetailPage,
    })
  )
);
