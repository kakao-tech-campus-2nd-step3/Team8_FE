import { GuardProfileBox } from '../components';
import { PointBox, PointLogBox, Withdrawal, PageLayout } from '@/shared';

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
