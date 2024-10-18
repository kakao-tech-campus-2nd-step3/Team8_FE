import { useState } from 'react';

import IconCalendar from '../../assets/calendar.svg';
import { CustomDatePicker } from './CustomDatePicker';
import { Box, Flex, Image, Text } from '@chakra-ui/react';
import styled from '@emotion/styled';

export const ServicePeriod = () => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  return (
    <ContentsBox>
      <Flex dir='row' alignItems='center' gap={3}>
        <TitleText>서비스 이용 기간</TitleText>
        <Image w={7} src={IconCalendar} alt='calendar' />
      </Flex>
      <Flex dir='row' w='100%' gap={3} alignItems='center'>
        <Text>서비스 시작일</Text>
        <CustomDatePicker
          selectDate={startDate}
          onSelectedDateChange={(date) => setStartDate(date)}
          dayType='start'
          minDate={new Date()}
        />
      </Flex>
      <Flex dir='row' w='100%' gap={3} alignItems='center'>
        <Text>서비스 종료일</Text>
        <CustomDatePicker
          selectDate={endDate}
          onSelectedDateChange={(date) => setEndDate(date)}
          dayType='end'
          minDate={startDate}
        />
      </Flex>
    </ContentsBox>
  );
};

const ContentsBox = styled(Box)`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1.2rem;
`;

const TitleText = styled(Text)`
  font-size: var(--font-size-xl);
  font-weight: 900;
`;
