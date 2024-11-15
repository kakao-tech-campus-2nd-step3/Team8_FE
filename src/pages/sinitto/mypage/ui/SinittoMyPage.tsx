import { lazy } from 'react';

import {
  PointBox,
  PointLogBox,
  Withdrawal,
  PageLayout,
} from '@/shared/components';

const SinittoProfileBox = lazy(
  () => import('../components/profile-box/SinittoProfileBox')
);

const AccountInfoBox = lazy(
  () => import('../components/account-info-box/AccountInfoBox')
);

export const SinittoMyPage = () => {
  return (
    <PageLayout>
      <SinittoProfileBox />
      <AccountInfoBox />
      <PointBox isSinitto={true} />
      <PointLogBox />
      <Withdrawal />
    </PageLayout>
  );
};
