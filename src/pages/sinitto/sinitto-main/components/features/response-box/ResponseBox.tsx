import { Flex, Text } from '@chakra-ui/react';
import styled from '@emotion/styled';

type Props = {
  seniorName: string;
};

export const ResponseBox = ({ seniorName }: Props) => {
  return (
    <Wrapper>
      <Text fontSize='lg'>{seniorName}님</Text>
      <Flex justify='space-between' alignItems='center'>
        <Text color='var(--color-gray)'>6 분전</Text>
        <StateBox>대기</StateBox>
      </Flex>
    </Wrapper>
  );
};

const Wrapper = styled(Flex)`
  justify-content: space-between;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  border: solid 1px var(--color-gray);
  box-shadow: 1px 1px 3px 0 #d2d2d2;
  border-radius: 1rem;
  width: 145px;
`;

const StateBox = styled(Flex)`
  background-color: #ffda76;
  padding: 2.5px 10px;
  border-radius: 5px;
  font-size: 16px;
`;
