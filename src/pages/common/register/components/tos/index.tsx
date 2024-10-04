// import { TosGuard } from './tos-guard';
import { TosSinitto } from './sinitto';
import { Checkbox } from '@chakra-ui/react';
import styled from '@emotion/styled';

export const Tos = () => {
  return (
    <Wrapper>
      <Title>서약서</Title>
      <TosContainer>
        {/* <TosGuard /> */}
        <TosSinitto />
      </TosContainer>
      <Checkbox colorScheme='gray' size='lg'>
        서약서의 내용에 동의합니다.
      </Checkbox>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 700;
  margin-top: 30px;
  margin-bottom: 10px;
`;

const TosContainer = styled.div`
  border: 1px solid #e6e6e6;
  border-radius: 5px;
  height: 300px;
  padding: 10px;
  overflow-y: scroll;
  margin-bottom: 10px;

  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
`;
