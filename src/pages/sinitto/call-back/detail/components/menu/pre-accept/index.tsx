import { BasicButton } from '@/shared/components';
import styled from '@emotion/styled';

type Props = {
  handleClick: () => void;
};

export const PreAcceptMenu = ({ handleClick }: Props) => {
  return (
    <Wrapper>
      <BasicButton onClick={handleClick}>전화걸기 및 수락하기</BasicButton>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  margin-top: 30px;
`;
