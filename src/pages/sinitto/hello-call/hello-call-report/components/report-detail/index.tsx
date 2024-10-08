import { useState } from 'react';

import CalendarIcon from '../../assets/calendar-icon.svg';
import ClockIcon from '../../assets/clock-icon.svg';
import FileIcon from '../../assets/file-icon.svg';
import { REPORT_DATA } from '../../test/mock';
import { ServiceTime } from '../../types';
import { Box, Button, Divider, Image, Text, Textarea } from '@chakra-ui/react';
import styled from '@emotion/styled';

const ReportDetail = () => {
  const [submitted, setSubmitted] = useState(false);

  const handlerSubmit = () => {
    setSubmitted(true);
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
            <Image src={CalendarIcon} alt='calendar-icon' />
            <Text fontSize='var(--font-size-lg)' fontWeight='700'>
              서비스 수행 기간
            </Text>
          </TitleBox>
          <Box ml={8}>
            <Text>{REPORT_DATA.servicePeriod}</Text>
          </Box>
        </InfoBox>
        <InfoBox>
          <TitleBox>
            <Image src={ClockIcon} alt='clock-icon' />
            <Text fontSize='var(--font-size-lg)' fontWeight='700'>
              서비스 수행 시간대
            </Text>
          </TitleBox>
          {REPORT_DATA.serviceTimes.map((time: ServiceTime, index: number) => (
            <Box
              key={index}
              display='flex'
              gap={3}
              ml={8}
              textAlign='center'
              alignItems='center'
            >
              <Text>{time.day}</Text>
              <Text>{time.time}</Text>
              <Box
                backgroundColor='var(--color-primary)'
                px={1}
                borderRadius={5}
              >
                <Text color='var(--color-white)'>{time.extraTime}</Text>
              </Box>
            </Box>
          ))}
        </InfoBox>
        <InfoBox h='15rem'>
          <TitleBox>
            <Image src={FileIcon} alt='speaker-icon' />
            <Text fontSize='var(--font-size-lg)' fontWeight='700'>
              어떤 이야기를 나누었나요?
            </Text>
          </TitleBox>
          <ReportTextArea />
        </InfoBox>
      </Box>
      <Divider />
      {!submitted ? (
        <SubmitButton onClick={handlerSubmit}>보고서 제출하기</SubmitButton>
      ) : (
        <SubmitButton>서비스 완료 확인하기</SubmitButton>
      )}
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

const ReportTextArea = styled(Textarea)`
  border: none;
  height: 100%;
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
