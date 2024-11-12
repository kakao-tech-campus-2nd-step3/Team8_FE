import { ServiceDetail } from '../components';
import { SERVICE_DETAIL } from '../data';
import {
  useHelloCallDetail,
  useFormattedServiceDates,
  useFormattedPhoneNumber,
  useNavigateToReport,
} from '../hooks';
import { Notice } from '@/shared/components';
import { Box, Button, Text } from '@chakra-ui/react';
import styled from '@emotion/styled';

export const HelloCallDetailPage = () => {
  const { helloCallId, data } = useHelloCallDetail();

  const { formattedStartDate, formattedEndDate } = useFormattedServiceDates(
    data?.startDate,
    data?.endDate
  );

  const phoneNumber = useFormattedPhoneNumber(data?.seniorPhoneNumber);

  const goToReport = useNavigateToReport(helloCallId);

  return (
    <HelloCallDetailPageLayout>
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
        startDate={formattedStartDate}
        endDate={formattedEndDate}
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
      <AcceptButton onClick={goToReport}>
        서비스 완료 및 보고서 제출
      </AcceptButton>
    </HelloCallDetailPageLayout>
  );
};

export default HelloCallDetailPage;

const HelloCallDetailPageLayout = styled.div`
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
