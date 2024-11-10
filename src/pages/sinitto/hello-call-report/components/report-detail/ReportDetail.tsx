import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { usePostWriteReport, WriteReportRequest } from '../../api';
import IconCalendar from '../../assets/calendar.svg';
import IconClock from '../../assets/clock.svg';
import IconFile from '../../assets/file.svg';
import { useGetServiceDetail, useServiceDate } from '@/pages';
import { Box, Button, Divider, Image, Text, Textarea } from '@chakra-ui/react';
import styled from '@emotion/styled';

const ReportDetail = () => {
  const [reportContent, setReportContent] = useState('');

  const { mutate: postWriteReport } = usePostWriteReport();
  const navigate = useNavigate();

  const helloCallId = localStorage.getItem('helloCallId');

  const { data: getServiceDetail } = useGetServiceDetail(Number(helloCallId));

  console.log(getServiceDetail);
  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setReportContent(e.target.value);
  };

  const handlerSubmit = (helloCallId: number) => {
    if (!reportContent.trim()) {
      alert('안부전화 내용을 간략하게 기록해주세요!');
      return;
    }

    const requestPayload: WriteReportRequest = {
      helloCallId,
      report: reportContent,
    };
    postWriteReport(requestPayload, {
      onSuccess: () => {
        localStorage.removeItem('helloCallId');

        navigate(`/sinitto/service-history`);
      },
    });
  };

  const startDate = useServiceDate(getServiceDetail?.startDate);
  const endDate = useServiceDate(getServiceDetail?.endDate);

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
          실제로 이야기했던 내용을 바탕으로 작성해주세요.
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
            <Text fontSize='var(--font-size-lg)' fontWeight='700'>
              서비스 수행 기간
            </Text>
          </TitleBox>
          <Box ml={8}>
            <Text>
              {startDate} ~ {endDate}
            </Text>
          </Box>
        </InfoBox>
        <InfoBox>
          <TitleBox>
            <Image src={IconClock} alt='clock-icon' />
            <Text fontSize='var(--font-size-lg)' fontWeight='700'>
              서비스 수행 시간대
            </Text>
          </TitleBox>
          {getServiceDetail?.timeSlots?.map((time, index) => (
            <Box
              key={index}
              display='flex'
              gap={3}
              ml={8}
              textAlign='center'
              alignItems='center'
            >
              <Text>{time.dayName}요일</Text>
              <Text>
                {String(time.startTime)} ~ {String(time.endTime)}
              </Text>
              <Box
                backgroundColor='var(--color-primary)'
                px={1}
                borderRadius={5}
              >
                <Text color='var(--color-white)'>
                  {getServiceDetail.serviceTime} 분
                </Text>
              </Box>
            </Box>
          ))}
        </InfoBox>
        <InfoBox h='15rem'>
          <TitleBox>
            <Image src={IconFile} alt='file-icon' />
            <Text fontSize='var(--font-size-lg)' fontWeight='700'>
              어떤 이야기를 나누었나요?
            </Text>
          </TitleBox>
          <Textarea
            border='none'
            height='full'
            onChange={(e) => handleContentChange(e)}
          />
        </InfoBox>
      </Box>
      <Divider />
      <SubmitButton onClick={() => handlerSubmit(Number(helloCallId))}>
        보고서 제출하기
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
