import { useNavigate } from 'react-router-dom';

import IconCalendar from '../../../sinitto/hello-call-report/assets/calendar.svg';
import IconFile from '../../../sinitto/hello-call-report/assets/file.svg';
import { useGetReport } from '../api';
import { usePutCompleteHelloCall } from '../api/hooks/usePutCompleteHelloCall';
import heartIcon from '../asset/heartIcon.svg';
import { Box, Text, Image, Divider, Button, Flex } from '@chakra-ui/react';
import styled from '@emotion/styled';

type Props = {
  helloCallId: number;
};

const ReportDetail = ({ helloCallId }: Props) => {
  const { data: reportData } = useGetReport(helloCallId);
  const completeHelloCallMutation = usePutCompleteHelloCall(helloCallId);
  const navigate = useNavigate();

  const completeHelloCall = () => {
    completeHelloCallMutation.mutate();
    navigate('/guard/mypage/service-history');
  };

  return (
    <>
      <Box
        display='flex'
        justifyContent='center'
        alignItems='center'
        backgroundColor='var(--color-secondary)'
        borderRadius='5px'
        padding='0.5rem'
      >
        <Text color='var(--color-primary)' fontWeight='700'>
          시니또가 작성한 보고서입니다. 잘 읽어보고 확인을 눌러주세요.
        </Text>
      </Box>
      <Box
        display='flex'
        w='full'
        p={4}
        flexDir='column'
        borderRadius='0.5rem'
        gap='1rem'
        backgroundColor='#e4e4e4'
        border='1px solid var(--color-gray)'
      >
        <InfoBox>
          <TitleBox>
            <Image src={IconCalendar} alt='calendar-icon' />
            <Text fontSize='var(--font-size-md)' fontWeight='700'>
              서비스 수행 기간
            </Text>
          </TitleBox>
          <Box ml={8}>
            <Text>
              {reportData?.startDate}~{reportData?.endDate}
            </Text>
          </Box>
        </InfoBox>
        <InfoBox>
          <TitleBox>
            <Image src={heartIcon} alt='clock-icon' />
            <Text fontSize='var(--font-size-md)' fontWeight='700'>
              이 시니또가 안부전화를 드렸어요!
            </Text>
          </TitleBox>
          <Box display='flex' ml={8} textAlign='center' alignItems='center'>
            {reportData?.sinittoName}
          </Box>
        </InfoBox>
        <InfoBox h='15rem'>
          <TitleBox>
            <Image src={IconFile} alt='file-icon' />
            <Text fontSize='var(--font-size-md)' fontWeight='700'>
              이런 이야기를 나누었어요.
            </Text>
          </TitleBox>
          <Flex ml={8} border='none' height='full'>
            {reportData?.report}
          </Flex>
        </InfoBox>
      </Box>
      <Divider />
      <SubmitButton onClick={completeHelloCall}>
        서비스 완료 확인하기
      </SubmitButton>
    </>
  );
};

export default ReportDetail;

const InfoBox = styled(Box)`
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
  border-radius: 0.5rem;
  gap: 0.5rem;
  background-color: var(--color-white);
  border: 1px solid var(--color-gray);
`;

const TitleBox = styled(Box)`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
`;

const SubmitButton = styled(Button)`
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
