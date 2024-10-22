import { useParams } from 'react-router-dom';

import { useGetSeniorAllGuidelines } from './api';
import { GuideLineInfo } from './components';
import { Box, Flex, Input, Text, Textarea } from '@chakra-ui/react';
import styled from '@emotion/styled';

export type GuideLineDetailParams = {
  seniorId: string; // 시니어 id
  guidelineType: string; // 가이드라인 type (TAXI, DELIVERY)
};

export const GuideLinePage = () => {
  const { seniorId, guidelineType } = useParams<GuideLineDetailParams>();

  const {
    data: guidelineData,
    isLoading,
    isError,
  } = useGetSeniorAllGuidelines(Number(seniorId), String(guidelineType));
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }

  return (
    <Container>
      <Flex
        h='100%'
        flexDir='column'
        alignItems='center'
        flexGrow={1}
        overflowY='auto'
      >
        {guidelineData?.map((guideline) => (
          <GuideLineInfo key={guideline.title} guideline={guideline} />
        ))}
      </Flex>
      <RegisterBox>
        <InputBox>
          <InputText>가이드라인 제목</InputText>
          <GuideLineInput />
        </InputBox>
        <InputBox>
          <InputText>가이드라인 내용</InputText>
          <GuideLineContentInput />
        </InputBox>
        <StyledButton>가이드라인 추가하기</StyledButton>
      </RegisterBox>
    </Container>
  );
};

const Container = styled(Box)`
  position: relative;
  height: 100vh;
`;
const RegisterBox = styled(Box)`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 350px;
  left: 50%;
  transform: translateX(-50%);
  max-width: 370px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--color-white-gray);
  border: 1px solid var(--color-white-gray);
  border-radius: 15px;
`;

const InputBox = styled(Box)`
  width: 300px;
  height: 80px;
  display: flex;
  flex-direction: column;
  margin: 0.5rem;
`;

const GuideLineContentInput = styled(Textarea)`
  background-color: var(--color-white);
  border: none;
  font-size: 1rem;
`;

const InputText = styled(Text)`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const GuideLineInput = styled(Input)`
  background-color: var(--color-white);
  border: none;
  font-size: 1rem;
`;

const StyledButton = styled.button`
  position: absolute;
  bottom: 1rem;
  width: 300px;
  height: 40px;
  background-color: #c69090;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #a67070;
  }

  &:active {
    transform: scale(0.98);
  }
`;
