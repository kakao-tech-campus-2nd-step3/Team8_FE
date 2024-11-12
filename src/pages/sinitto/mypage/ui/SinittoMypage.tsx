import { AccountInfoBox, SinittoProfileBox } from '../components';
import {
  PointBox,
  PointLogBox,
  Withdrawal,
  PageLayout,
} from '@/shared/components';

export const SinittoMypage = () => {
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
