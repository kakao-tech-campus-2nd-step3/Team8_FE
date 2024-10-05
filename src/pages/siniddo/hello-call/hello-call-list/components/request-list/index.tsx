import arrowIcon from '../../assets/arrow-icon.svg';
import { Box, Image, Text } from '@chakra-ui/react';
import styled from '@emotion/styled';

type Props = {
  onClick?: () => void;
};

const RequestList = ({ onClick }: Props) => {
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
        <Text>김숙자님의 요청</Text>
      </Box>
      <Box display='flex' gap={5} alignItems='center'>
        <Box display='flex' flexDir='row' gap={1} alignItems='center'>
          <DayBox>월</DayBox>
          <DayBox>화</DayBox>
          <DayBox>수</DayBox>
        </Box>
        <Box>
          <Image src={arrowIcon} alt='arrow-icon' />
        </Box>
      </Box>
    </Box>
  );
};

export default RequestList;

const DayBox = styled(Text)`
  padding: 0.125rem 0.3rem;
  border-radius: 0.25rem;
  background-color: var(--color-secondary);
  font-size: var(--font-size-sm);
`;
