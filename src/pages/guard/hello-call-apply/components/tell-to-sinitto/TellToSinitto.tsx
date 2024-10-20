import { Flex, Text, Textarea } from '@chakra-ui/react';
import styled from '@emotion/styled';

export const TellToSinitto = () => {
  return (
    <Wrapper flexDir='column'>
      <TitleText>시니또에게 전할 내용</TitleText>
      <Wrapper my={3}>
        <Textarea h='10rem' placeholder='어르신에 대한 내용을 입력해주세요' />
      </Wrapper>
    </Wrapper>
  );
};

const Wrapper = styled(Flex)`
  width: 100%;
`;

const TitleText = styled(Text)`
  font-size: var(--font-size-xl);
  font-weight: 900;
`;
