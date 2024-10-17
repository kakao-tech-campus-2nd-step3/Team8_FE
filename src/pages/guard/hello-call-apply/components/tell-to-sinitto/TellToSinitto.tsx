import { Box, Flex, Text, Textarea } from '@chakra-ui/react';
import styled from '@emotion/styled';

export const TellToSinitto = () => {
  return (
    <Box
      display='flex'
      flexDir='column'
      w='100%'
      textAlign='start'
      justifyContent='start'
    >
      <TitleText>시니또에게 전할 내용</TitleText>
      <Flex w='100%' my={3}>
        <Textarea placeholder='어르신에 대한 내용을 입력해주세요' />
      </Flex>
    </Box>
  );
};

const TitleText = styled(Text)`
  font-size: var(--font-size-xl);
  font-weight: 900;
`;
