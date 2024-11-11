import { ServiceDetail } from './components';
import { SERVICE_NOTICE } from './data';
import { useHelloCallService } from './hooks';
import TitleImg from '@/pages/assets/shared/hello-call/title-icon.png';
import { PageLayout, Notice, BasicButton } from '@/shared/components';
import { Box, Image } from '@chakra-ui/react';

const HelloCallServicePage = () => {
  const { serviceData, startDate, endDate, handleAcceptService } =
    useHelloCallService();

  return (
    <PageLayout>
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
      <ServiceDetail
        startDate={startDate}
        endDate={endDate}
        timeSlots={serviceData?.timeSlots}
        serviceTime={serviceData?.serviceTime}
        requirement={serviceData?.requirement}
      />
      <Notice
        title={SERVICE_NOTICE.service_title}
        contents={SERVICE_NOTICE.service_contents}
        noticeType='안부전화'
      />
      <BasicButton onClick={handleAcceptService}>
        서비스 수락하기 ({data?.price.toLocaleString()}P)
      </BasicButton>
    </PageLayout>
  );
};

export default HelloCallServicePage;
