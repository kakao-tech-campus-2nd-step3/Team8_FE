import { useParams } from 'react-router-dom';

import { useGetServiceDetail, usePutAcceptHelloCall } from './api';
import { ServiceDetail } from './components';
import { SERVICE_NOTICE } from './data';
import { useServiceDate } from './hooks';
import TitleImg from '@/pages/assets/shared/hello-call/title-icon.png';
import { PageLayout, Notice, BasicButton } from '@/shared/components';
import { Box, Image } from '@chakra-ui/react';

const HelloCallServicePage = () => {
  const { helloCallId } = useParams();

  const { data } = useGetServiceDetail(Number(helloCallId));

  const { mutate: acceptHelloCall } = usePutAcceptHelloCall(
    Number(helloCallId)
  );

  const startDate = useServiceDate(data?.startDate);
  const endDate = useServiceDate(data?.endDate);

  const handleAcceptService = () => {
    acceptHelloCall();
  };

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
        timeSlots={data?.timeSlots}
        serviceTime={data?.serviceTime}
        requirement={data?.requirement}
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
