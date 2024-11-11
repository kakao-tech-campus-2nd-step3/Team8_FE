import { BasicButton } from '@/shared/components';
import { Flex } from '@chakra-ui/react';
import styled from '@emotion/styled';

type Props = {
  handleComplete: () => void;
  handleCancle: () => void;
  phoneNumber: string;
};

export const PostAcceptMenu = ({
  handleComplete,
  handleCancle,
  phoneNumber,
}: Props) => {
  return (
    <Flex flexDir='column' width='100%' gap='var(--space-md)'>
      <Flex flexDir='column' width='100%' gap='var(--space-xs)'>
        <BasicButton onClick={handleComplete}>도움 완료</BasicButton>
        <BasicButton onClick={handleCancle} themeType='outline'>
          도움 포기
        </BasicButton>
      </Flex>
      <ContectSection>
        <Title>시니어 전화번호</Title>
        <Content>{phoneNumber}</Content>
      </ContectSection>
    </Flex>
  );
};

const ContectSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.div`
  width: 200px;
  padding: 5px;
  border-radius: 5px;
  background-color: #f6e4e4;
  font-size: var(--font-size-md);
  font-weight: 400;
  color: #c69090;
  text-align: center;
`;

const Content = styled.p`
  font-size: var(--font-size-xxl);
  font-weight: 700;
  margin-top: var(--space-xs);
`;
