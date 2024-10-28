import IconCalendar from '../../assets/calendar.svg';
import { CustomDatePicker } from './CustomDatePicker';
import { Box, Flex, Image, Text } from '@chakra-ui/react';
import styled from '@emotion/styled';

export type Props = {
  startDate: Date | null;
  endDate: Date | null;
  setStartDate: (date: Date | null) => void;
  setEndDate: (date: Date | null) => void;
};

export const ServicePeriod = ({
  startDate,
  setStartDate,
  endDate,
  setEndDate,
}: Props) => {
  return (
    <ContentsBox>
      <Flex dir='row' alignItems='center' gap={3}>
        <TitleText>서비스 이용 기간</TitleText>
      </Flex>
      <Flex dir='row' w='100%' gap={2} textAlign='center' alignItems='center'>
        <Text w={20}>시작 날짜</Text>
        <Image w={6} src={IconCalendar} alt='calendar' />
        <CustomDatePicker
          selectDate={startDate}
          onSelectedDateChange={(date) => setStartDate(date)}
          dayType='start'
          minDate={new Date()}
        />
      </Flex>
      <Flex dir='row' w='100%' gap={2} textAlign='center' alignItems='center'>
        <Text w={20}>종료 날짜</Text>
        <Image w={6} src={IconCalendar} alt='calendar' />
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
