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
      p='var(--space-sm)'
      flexDir='column'
      borderRadius='5px'
      gap='var(--space-sm)'
      backgroundColor='var(--color-white-gray)'
    >
      <InfoBox>
        <Flex flexDir='row' alignItems='center' gap='var(--space-xs)'>
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
        <Flex flexDir='row' alignItems='center' gap='var(--space-xs)'>
          <Image src={IconClock} alt='clock-icon' />
          <Text fontSize='var(--font-size-lg)' fontWeight='700'>
            서비스 수행 시간대
          </Text>
        </Flex>
        <Flex flexDir='column' gap='var(--space-xxs)'>
          {timeSlots?.map((time, index) => (
            <Box
              key={index}
              display='flex'
              gap='var(--space-xs)'
              ml={8}
              textAlign='center'
              alignItems='center'
            >
              <Text>{time.dayName}요일</Text>
              <Text width='105px'>
                {String(time.startTime)} ~ {String(time.endTime)}
              </Text>
              <Box
                backgroundColor='var(--color-primary)'
                px={1}
                borderRadius={5}
              >
                <Text color='var(--color-white)'>{serviceTime} 분</Text>
              </Box>
            </Box>
          ))}
        </Flex>
      </InfoBox>

      <InfoBox>
        <Flex flexDir='row' alignItems='center' gap='var(--space-xs)'>
          <Image src={IconSpeaker} alt='speaker-icon' />
          <Text fontSize='var(--font-size-lg)' fontWeight='700'>
            안부전화 시 요청사항
          </Text>
        </Flex>
        <Box ml={8}>
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
  padding: var(--space-sm);
  border-radius: 5px;
  gap: var(--space-xs);
  background-color: var(--color-white);
`;
