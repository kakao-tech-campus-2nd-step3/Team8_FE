import { useState } from 'react';
import { useParams } from 'react-router-dom';

import { useGetServiceDetail, usePutAcceptHelloCall } from './api';
import TitleImg from './assets/title-icon.png';
import { ServiceDetail } from './components';
import { SERVICE_NOTICE } from './data';
import { useFormatPhoneNumber, useServiceDate } from './hooks';
import { PageLayout, Notice, BasicButton } from '@/shared';
import { Box, Divider, Image } from '@chakra-ui/react';
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
    <PageLayout>
      {!detailed ? (
        <Box
          w='full'
          display='flex'
          py={3}
          justifyContent='center'
          backgroundColor='#E6DFD1'
          borderRadius='5px'
        >
          <Image src={TitleImg} alt='title-img' />
        </Box>
      ) : (
        <ContectSection>
          <Title>시니어 전화번호</Title>
          <Content>{phoneNumber}</Content>
        </ContectSection>
      )}
      <ServiceDetail
        startDate={startDate}
        endDate={endDate}
        timeSlots={data?.timeSlots}
        serviceTime={data?.serviceTime}
        requirement={data?.requirement}
      />
      <Box display='flex' flexDir='column' gap='var(--space-sm)'>
        <Notice
          title={SERVICE_NOTICE.service_title}
          contents={SERVICE_NOTICE.service_contents}
          noticeType='안부전화'
        />
        {detailed && (
          <Notice
            title={SERVICE_NOTICE.finish_title}
            contents={SERVICE_NOTICE.finish_contents}
            noticeType='안부전화'
          />
        )}
      </Box>
      <Divider />
      {!detailed ? (
        <BasicButton onClick={goToDetail}>서비스 상세 확인하기</BasicButton>
      ) : (
        <BasicButton onClick={handleAcceptService}>
          서비스 수락하기 ({data?.price.toLocaleString()}P)
        </BasicButton>
      )}
    </PageLayout>
  );
};

export default HelloCallServicePage;

const ContectSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.div`
  width: 200px;
  padding: 5px;
  border-radius: 5px;
  background-color: #f6e4e4;
  font-size: var(--font-size-md);
  font-weight: 400;
  color: #c69090;
  text-align: center;
`;

const Content = styled.p`
  font-size: var(--font-size-xxl);
  font-weight: 700;
  margin-top: var(--space-xs);
`;
