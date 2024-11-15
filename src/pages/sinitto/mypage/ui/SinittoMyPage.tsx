import { AccountInfoBox, SinittoProfileBox } from '../components';
import {
  PointBox,
  PointLogBox,
  Withdrawal,
  PageLayout,
} from '@/shared/components';

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
