import {
  CallBackApply,
  HelloCallApply,
  ServiceHistoryButton,
  SinittoName,
} from '../components';
import { PageLayout } from '@/shared';

export const SinittoMainPage = () => {
  return (
    <PageLayout>
      <SinittoName />
      <ServiceHistoryButton />
      <CallBackApply />
      <HelloCallApply />
    </PageLayout>
  );
};
