import { TimeSlot } from '../../api';
import IconCalendar from '@/pages/assets/shared/hello-call/calendar.svg';
import IconClock from '@/pages/assets/shared/hello-call/clock.svg';
import IconSpeaker from '@/pages/assets/shared/hello-call/speaker.svg';
import { Box, Flex, Image, Text } from '@chakra-ui/react';
import styled from '@emotion/styled';

type Props = {
  startDate: string;
  endDate: string;
  timeSlots: TimeSlot[] | undefined;
  serviceTime: number | undefined;
  requirement: string | undefined;
};

const ServiceDetail = ({
  startDate,
  endDate,
  timeSlots,
  serviceTime,
  requirement,
}: Props) => {
  return (
    <Flex
      display='flex'
      p={4}
      flexDir='column'
      borderRadius='0.5rem'
      gap='1rem'
      backgroundColor='#e4e4e4'
      border='1px solid var(--color-gray)'
    >
      <InfoBox>
        <Flex flexDir='row' alignItems='center' gap='0.5rem'>
          <Image src={IconCalendar} alt='calendar-icon' />
          <Text fontSize='var(--font-size-lg)' fontWeight='700'>
            서비스 수행 기간
          </Text>
        </Flex>
        <Box ml={8}>
          <Text>
            {startDate} ~ {endDate}
          </Text>
        </Box>
      </InfoBox>
      <InfoBox>
        <Flex flexDir='row' alignItems='center' gap='0.5rem'>
          <Image src={IconClock} alt='clock-icon' />
          <Text fontSize='var(--font-size-lg)' fontWeight='700'>
            서비스 수행 시간대
          </Text>
        </Flex>
        {timeSlots?.map((time, index) => (
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
            <Box backgroundColor='var(--color-primary)' px={1} borderRadius={5}>
              <Text color='var(--color-white)'>{serviceTime} 분</Text>
            </Box>
          </Box>
        ))}
      </InfoBox>

      <InfoBox>
        <Flex flexDir='row' alignItems='center' gap='0.5rem'>
          <Image src={IconSpeaker} alt='speaker-icon' />
          <Text fontSize='var(--font-size-lg)' fontWeight='700'>
            안부전화 시 요청사항
          </Text>
        </Flex>
        <Box mx={8}>
          <Text>{requirement}</Text>
        </Box>
      </InfoBox>
    </Flex>
  );
};

export default ServiceDetail;

const InfoBox = styled(Box)`
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
  border-radius: 0.5rem;
  gap: 0.5rem;
  background-color: var(--color-white);
  border: 1px solid var(--color-gray);
`;
