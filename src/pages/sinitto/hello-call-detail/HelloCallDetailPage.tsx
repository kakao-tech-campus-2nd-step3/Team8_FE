import { useNavigate, useParams } from 'react-router-dom';

import { useGetServiceDetail } from './api';
import { ServiceDetail } from './components';
import { SERVICE_DETAIL } from './data';
import { useFormatPhoneNumber, useServiceDate } from './hooks';
import { Notice, PageLayout, BasicButton } from '@/shared';
import { Box, Button, Text } from '@chakra-ui/react';
import styled from '@emotion/styled';

export const HelloCallDetailPage = () => {
  const { helloCallId } = useParams();

  const { data } = useGetServiceDetail(Number(helloCallId));

  const navigate = useNavigate();

  const startDate = useServiceDate(data?.startDate);
  const endDate = useServiceDate(data?.endDate);

  const phoneNumber = useFormatPhoneNumber(data?.seniorPhoneNumber);

  const goToReport = () => {
    navigate(`/sinitto/hello-call/report/${helloCallId}`);
  };

  return (
    <PageLayout>
      <Box display='flex' flexDir='column' alignItems='center'>
        <Box
          display='flex'
          w='10rem'
          justifyContent='center'
          backgroundColor='var(--color-secondary)'
          borderRadius='5px'
        >
          <Text color='var(--color-primary)'>시니어 전화번호</Text>
        </Box>
        <Text fontSize='var(--font-size-xl)' fontWeight='700'>
          {phoneNumber}
        </Text>
      </Box>

      <ServiceDetail
        startDate={startDate}
        endDate={endDate}
        timeSlots={data?.timeSlots}
        serviceTime={data?.serviceTime}
        requirement={data?.requirement}
      />
      <Box display='flex' flexDir='column' gap={2}>
        <Notice
          title={SERVICE_DETAIL.detail_title}
          contents={SERVICE_DETAIL.detail_contents}
          noticeType='안부전화'
        />
      </Box>
      <BasicButton onClick={goToReport}>서비스 완료 및 보고서 제출</BasicButton>
    </PageLayout>
  );
};

export default HelloCallDetailPage;
