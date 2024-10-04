import { BasicButton } from '@/shared/components/common/button';
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
    <Wrapper>
      <BasicButton onClick={handleComplete}>도움 완료</BasicButton>
      <Space />
      <BasicButton onClick={handleCancle} themeType='outline'>
        도움 포기
      </BasicButton>
      <ContectSection>
        <Title>시니어 전화번호</Title>
        <Content>{phoneNumber}</Content>
      </ContectSection>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  margin-top: 30px;
`;

const Space = styled.div`
  width: 100%;
  height: 10px;
`;

const ContectSection = styled.div`
  margin-top: 30px;
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
  font-size: 16px;
  font-weight: 400;
  color: #c69090;
  text-align: center;
`;

const Content = styled.p`
  font-size: 30px;
  font-weight: 700;
  margin-top: 10px;
`;
