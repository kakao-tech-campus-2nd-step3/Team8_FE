import {
  CallBackApply,
  Header,
  HelloCallApply,
  ServiceHistoryButton,
  SinittoName,
} from './components';
import { PageLayout } from '@/shared';

export const SinittoMainPage = () => {
  return (
    <PageLayout>
      <Header />
      <SinittoName />
      <ServiceHistoryButton />
      <CallBackApply />
      <HelloCallApply />
    </PageLayout>
  );
};
