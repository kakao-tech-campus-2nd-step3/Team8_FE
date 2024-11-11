import { ServiceDetail } from './components';
import { SERVICE_NOTICE } from './data';
import { useHelloCallService } from './hooks';
import TitleImg from '@/pages/assets/shared/hello-call/title-icon.png';
import { Notice } from '@/shared/components';
import { Box, Button, Image } from '@chakra-ui/react';
import styled from '@emotion/styled';

const HelloCallServicePage = () => {
  const { serviceData, startDate, endDate, handleAcceptService } =
    useHelloCallService();

  return (
    <HelloCallServicePageLayout>
      <Box
        display='flex'
        py={3}
        justifyContent='center'
        backgroundColor='#E6DFD1'
        borderRadius='0.5rem'
      >
        <Image src={TitleImg} alt='title-img' />
      </Box>
      <ServiceDetail
        startDate={startDate}
        endDate={endDate}
        timeSlots={serviceData?.timeSlots}
        serviceTime={serviceData?.serviceTime}
        requirement={serviceData?.requirement}
      />
      <Box display='flex' flexDir='column' gap={2}>
        <Notice
          title={SERVICE_NOTICE.service_title}
          contents={SERVICE_NOTICE.service_contents}
          noticeType='안부전화'
        />
      </Box>
      <AcceptButton onClick={handleAcceptService}>
        서비스 수락하기 ({serviceData?.price.toLocaleString()}P)
      </AcceptButton>
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
