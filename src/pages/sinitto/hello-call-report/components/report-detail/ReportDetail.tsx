import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { usePostWriteReport, WriteReportRequest } from '../../api';
import IconCalendar from '../../assets/calendar.svg';
import IconClock from '../../assets/clock.svg';
import IconFile from '../../assets/file.svg';
import { REPORT_DATA } from '../../test';
import { ServiceTime } from '../../types';
import { BasicButton } from '@/shared';
import { Flex, Box, Divider, Image, Text, Textarea } from '@chakra-ui/react';
import styled from '@emotion/styled';

const ReportDetail = () => {
  const [reportContent, setReportContent] = useState('');

  const { mutate: postWriteReport } = usePostWriteReport();

  const navigate = useNavigate();

  const helloCallId = localStorage.getItem('helloCallId');

  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setReportContent(e.target.value);
  };

  const handlerSubmit = (helloCallId: number) => {
    const requestPayload: WriteReportRequest = {
      helloCallId,
      report: reportContent,
    };
    postWriteReport(requestPayload, {
      onSuccess: () => {
        localStorage.removeItem('helloCallId');
        navigate(-1);
      },
    });
  };

  return (
    <>
      <Box
        display='flex'
        p='var(--space-sm)'
        flexDir='column'
        borderRadius='5px'
        gap='var(--space-sm)'
        backgroundColor='var(--color-white-gray)'
        w='full'
      >
        <InfoBox>
          <Flex flexDir='row' alignItems='center' gap='var(--space-xs)'>
            <Image src={IconCalendar} alt='calendar-icon' />
            <Text fontSize='var(--font-size-lg)' fontWeight='700'>
              서비스 수행 기간
            </Text>
          </Flex>
          <Box ml={8}>
            <Text>{REPORT_DATA.servicePeriod}</Text>
          </Box>
        </InfoBox>

        <InfoBox>
          <Flex flexDir='row' alignItems='center' gap='var(--space-xs)'>
            <Image src={IconClock} alt='clock-icon' />
            <Text fontSize='var(--font-size-lg)' fontWeight='700'>
              서비스 수행 시간대
            </Text>
          </Flex>
          <Flex flexDir='column' gap='var(--space-xxs)'>
            {REPORT_DATA.serviceTimes.map(
              (time: ServiceTime, index: number) => (
                <Box
                  key={index}
                  display='flex'
                  gap='var(--space-xs)'
                  ml={8}
                  textAlign='center'
                  alignItems='center'
                >
                  <Text>{time.day}요일</Text>
                  <Text width='105px'>{time.time}</Text>
                  <Box
                    backgroundColor='var(--color-primary)'
                    px={1}
                    borderRadius={5}
                  >
                    <Text color='var(--color-white)'>{time.extraTime}</Text>
                  </Box>
                </Box>
              )
            )}
          </Flex>
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
            resize='none'
            height='full'
            onChange={(e) => handleContentChange(e)}
          />
        </InfoBox>
      </Box>
      <Divider />
      <BasicButton onClick={() => handlerSubmit(Number(helloCallId))}>
        보고서 제출하기
      </BasicButton>
    </>
  );
};

export default ReportDetail;

const InfoBox = styled(Box)`
  display: flex;
  flex-direction: column;
  padding: var(--space-sm);
  border-radius: 5px;
  gap: var(--space-xs);
  background-color: var(--color-white);
`;

const TitleBox = styled(Box)`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
`;
