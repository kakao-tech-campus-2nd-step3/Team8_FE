import { Input } from '@chakra-ui/react';
import styled from '@emotion/styled';

export const RegisterFields = () => {
  return (
    <Wrapper>
      <Title>
        <EmphasisSpan>이름</EmphasisSpan>을 입력해주세요.
      </Title>
      <Input size='lg' placeholder='예시: 홍길동' />

      <Title>
        <EmphasisSpan>연락처</EmphasisSpan>를 입력해주세요.
      </Title>
      <Input size='lg' placeholder='예시: 010-0000-0000' />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weigth: 700;
  margin-top: 30px;
  margin-bottom: 10px;
`;

const EmphasisSpan = styled.span`
  color: #c69090;
`;
