import { useState } from 'react';
import { useParams } from 'react-router-dom';

import { useGetServiceDetail, usePutAcceptHelloCall } from './api';
import TitleImg from './assets/title-icon.png';
import { ServiceDetail } from './components';
import { SERVICE_NOTICE } from './data';
import { useFormatPhoneNumber, useServiceDate } from './hooks';
import { Notice } from '@/shared/components';
import { Box, Button, Divider, Image, Text } from '@chakra-ui/react';
import styled from '@emotion/styled';

const HelloCallServicePage = () => {
  const [detailed, setDetailed] = useState(false);

  const { helloCallId } = useParams();

  const { data } = useGetServiceDetail(Number(helloCallId));

  const { mutate: acceptHelloCall } = usePutAcceptHelloCall(
    Number(helloCallId)
  );

  const startDate = useServiceDate(data?.startDate);
  const endDate = useServiceDate(data?.endDate);

  const phoneNumber = useFormatPhoneNumber(data?.seniorPhoneNumber);

  const goToDetail = () => {
    setDetailed(true);
  };

  const handleAcceptService = () => {
    acceptHelloCall();
  };

  return (
    <HelloCallServicePageLayout>
      {!detailed ? (
        <Box
          display='flex'
          py={3}
          justifyContent='center'
          backgroundColor='#E6DFD1'
          borderRadius='0.5rem'
        >
          <Image src={TitleImg} alt='title-img' />
        </Box>
      ) : (
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
      )}
      <ServiceDetail
        startDate={startDate}
        endDate={endDate}
        timeSlots={data?.timeSlots}
        serviceTime={data?.serviceTime}
        requirement={data?.requirement}
      />
      <Box display='flex' flexDir='column' gap={2}>
        <Notice
          title={SERVICE_NOTICE.service_title}
          contents={SERVICE_NOTICE.service_contents}
          noticeType='안부전화'
        />
        {detailed && (
          <>
            <Notice
              title={SERVICE_NOTICE.finish_title}
              contents={SERVICE_NOTICE.finish_contents}
              noticeType='안부전화'
            />
            <Divider />
          </>
        )}
      </Box>
      {!detailed ? (
        <AcceptButton onClick={goToDetail}>서비스 상세 확인하기</AcceptButton>
      ) : (
        <AcceptButton onClick={handleAcceptService}>
          서비스 수락하기 ({data?.price.toLocaleString()}P)
        </AcceptButton>
      )}
    </HelloCallServicePageLayout>
  );
};

export default HelloCallServicePage;

const HelloCallServicePageLayout = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  gap: 1rem;
  margin: 1rem 1.5rem;
`;

const AcceptButton = styled(Button)`
  height: 3rem;
  background-color: var(--color-primary);
  color: var(--color-white);
  font-weight: 700;
  border-radius: 0.5rem;
  text-align: center;
  margin-bottom: 10px;

  &:hover {
    background-color: var(--color-primary);
  }
`;
