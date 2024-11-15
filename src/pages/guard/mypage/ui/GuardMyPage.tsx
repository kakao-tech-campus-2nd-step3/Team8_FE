import { lazy } from 'react';

import { GuardProfileBox } from '../components';
import { Withdrawal, PageLayout } from '@/shared';

const PointLogBox = lazy(
  () => import('@/shared/components/features/mypage/point-log-box/PointLogBox')
);

const PointBox = lazy(
  () => import('@/shared/components/features/mypage/point-box/PointBox')
);

export const GuardMyPage = () => {
  return (
    <PageLayout>
      <GuardProfileBox />
      <PointBox />
      <PointLogBox />
      <Withdrawal />
    </PageLayout>
  );
};
