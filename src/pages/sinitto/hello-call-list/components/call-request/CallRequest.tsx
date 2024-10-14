import ArrowIcon from '../../assets/arrow.svg';
import { Box, Image, Text } from '@chakra-ui/react';
import styled from '@emotion/styled';

type Props = {
  onClick?: () => void;
  seniorName?: string;
  days?: string[];
};

const CallRequest = ({ onClick, seniorName, days }: Props) => {
  return (
    <Box
      display='flex'
      flexDir='row'
      alignItems='center'
      textAlign='center'
      justifyContent='space-between'
      px={5}
      gap={5}
      backgroundColor='var(--color-white-gray)'
      width='100%'
      borderRadius='0.5rem'
      h='3.5rem'
      onClick={onClick}
    >
      <Box>
        <Text>{seniorName}님의 요청</Text>
      </Box>
      <Box display='flex' gap={5} alignItems='center'>
        <Box display='flex' flexDir='row' gap={1} alignItems='center'>
          {days?.map((day, index) => <DayBox key={index}>{day}</DayBox>)}
        </Box>
        <Box>
          <Image src={ArrowIcon} alt='arrow-icon' />
        </Box>
      </Box>
    </Box>
  );
};

export default CallRequest;

const DayBox = styled(Text)`
  padding: 0.125rem 0.3rem;
  border-radius: 0.25rem;
  background-color: var(--color-secondary);
  font-size: var(--font-size-sm);
`;
