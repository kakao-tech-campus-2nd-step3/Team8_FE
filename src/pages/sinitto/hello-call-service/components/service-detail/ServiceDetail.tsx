import IconCalendar from '../../assets/calendar.svg';
import IconClock from '../../assets/clock.svg';
import IconSpeaker from '../../assets/speaker.svg';
import { SERVICE_DATA } from '../../test';
import { Box, Image, Text } from '@chakra-ui/react';
import styled from '@emotion/styled';

const ServiceDetail = () => {
  return (
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
          <Text>{SERVICE_DATA.servicePeriod}</Text>
        </Box>
      </InfoBox>
      <InfoBox>
        <TitleBox>
          <Image src={IconClock} alt='clock-icon' />
          <Text fontSize='var(--font-size-lg)' fontWeight='700'>
            서비스 수행 시간대
          </Text>
        </TitleBox>
        {SERVICE_DATA.serviceTimes.map((time, index) => (
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
            <Box backgroundColor='var(--color-primary)' px={1} borderRadius={5}>
              <Text color='var(--color-white)'>{time.extraTime}</Text>
            </Box>
          </Box>
        ))}
      </InfoBox>

      <InfoBox>
        <TitleBox>
          <Image src={IconSpeaker} alt='speaker-icon' />
          <Text fontSize='var(--font-size-lg)' fontWeight='700'>
            안부전화 시 요청사항
          </Text>
        </TitleBox>
        <Box ml={8}>
          <Text>{SERVICE_DATA.request}</Text>
        </Box>
      </InfoBox>
    </Box>
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

const TitleBox = styled(Box)`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
`;
