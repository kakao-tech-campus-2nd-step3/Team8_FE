import { useState } from 'react';

import {
  SelectSenior,
  ServicePeriod,
  ServiceTime,
  ServiceTotal,
} from './components';
import { NOTICE_DATA } from './data';
import { Notice } from '@/shared';
import { Box, Button, Text } from '@chakra-ui/react';
import styled from '@emotion/styled';

export const HelloCallApplyPage = () => {
  const [serviceTime, setServiceTime] = useState(0);
  const [serviceCount, setServiceCount] = useState(1);

  return (
    <HelloCallApplyPageLayout>
      <NoticeBox>
        <Notice
          noticeType={NOTICE_DATA.noticeType}
          title={NOTICE_DATA.title_price}
          contents={NOTICE_DATA.contents_price}
        />
      </NoticeBox>
      <NoticeBox>
        <Notice
          noticeType={NOTICE_DATA.noticeType}
          title={NOTICE_DATA.title_info}
          contents={NOTICE_DATA.contents_info}
        />
      </NoticeBox>
      <SelectSenior />
      <ServiceTime setTime={setServiceTime} setCount={setServiceCount} />
      <ServicePeriod />
      <ServiceTotal time={serviceTime} count={serviceCount} />

      <Button w='90%' backgroundColor='var(--color-primary)'>
        <Text color='var(--color-white)'>2,000 point로 신청하기</Text>
      </Button>
    </HelloCallApplyPageLayout>
  );
};

const HelloCallApplyPageLayout = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 1rem 1.5rem;
`;

const NoticeBox = styled(Box)`
  display: flex;
  flex-direction: column;
  margin: 0.5rem 0;
`;
