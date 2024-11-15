import { lazy } from 'react';

import { useHelloCallId } from '../hooks';
import { Flex } from '@chakra-ui/react';

const GuardReportDetail = lazy(() => import('../components/GuardReportDetail'));

const GuardReportPage = () => {
  const helloCallId = useHelloCallId();

  return (
    <Flex
      direction='column'
      height='100%'
      gap='1rem'
      margin='1rem 1.5rem'
      w='full'
    >
      <GuardReportDetail helloCallId={Number(helloCallId)} />
    </Flex>
  );
};

export default GuardReportPage;
