import { Box, Text } from '@chakra-ui/react';
import styled from '@emotion/styled';

type Props = {
  title: string;
  contents: string;
};

const Notice = ({ title, contents }: Props) => {
  return (
    <Wrapper>
      <Box
        backgroundColor='var(--color-secondary)'
        w='3.75rem'
        textAlign='center'
        borderRadius='7px'
      >
        <Text
          color='var(--color-primary)'
          fontSize='var(--font-size-sm)'
          fontWeight='700'
        >
          안부전화
        </Text>
      </Box>
      <Box display='flex' flexDir='column' gap={1}>
        <Text fontWeight='700'>{title}</Text>
        <Text color='var(--color-gray)'>{contents}</Text>
      </Box>
    </Wrapper>
  );
};

export default Notice;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;
