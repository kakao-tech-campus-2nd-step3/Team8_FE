import { BasicButton } from '@/shared/components/common/button';
import styled from '@emotion/styled';

type Props = {
  handleClcik: () => void;
};

export const PreAcceptMenu = ({ handleClcik }: Props) => {
  return (
    <Wrapper>
      <BasicButton onClick={handleClcik}>전화걸기 및 수락하기</BasicButton>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  margin-top: 30px;
`;
