import { BasicButton } from '@/shared/components/common/button';
import styled from '@emotion/styled';

export const PreAcceptMenu = () => {
  return (
    <Wrapper>
      <BasicButton>전화걸기 및 수락하기</BasicButton>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  margin-top: 30px;
`;
