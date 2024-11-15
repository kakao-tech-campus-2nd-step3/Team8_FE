import { lazy } from 'react';

import {
  CallBackApply,
  HelloCallApply,
  ServiceHistoryButton,
} from '../components';
import { PageLayout } from '@/shared';

const SinittoName = lazy(() =>
  import('../components/common/sinitto-name/SinittoName').then((module) => ({
    default: module.SinittoName,
  }))
);

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
