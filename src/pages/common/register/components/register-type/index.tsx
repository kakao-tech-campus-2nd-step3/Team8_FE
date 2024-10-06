import { TypeButton } from './type-button.tsx';
import styled from '@emotion/styled';

type Props = {
  userType: string;
  handleClick: (id: string) => void;
};

export const RegisterType = ({ userType, handleClick }: Props) => {
  return (
    <Wrapper>
      <Title>가입 유형</Title>
      <TypeWrapper>
        <TypeButton
          id='sinitto'
          content='시니또'
          isSelected={userType == 'sinitto'}
          handleClick={handleClick}
        />
        <TypeButton
          id='guard'
          content='보호자'
          isSelected={userType == 'guard'}
          handleClick={handleClick}
        />
      </TypeWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  padding: 15px 0 50px;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 700;
`;

const TypeWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 13px;
`;
