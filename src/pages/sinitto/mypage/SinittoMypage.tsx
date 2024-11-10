import { SinittoProfileBox, AccountInfoBox } from './components';
import {
  PointBox,
  PointLogBox,
  Withdrawal,
  PageLayout,
} from '@/shared/components';

const SinittoMypage = () => {
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

export default SinittoMypage;
