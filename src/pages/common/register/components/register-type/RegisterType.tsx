import { TypeButton } from './type-button';
import { Box } from '@chakra-ui/react';
import styled from '@emotion/styled';

type Props = {
  userType: string;
  handleClick: (id: string) => void;
};

export const RegisterType = ({ userType, handleClick }: Props) => {
  return (
    <Box width='100%'>
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
    </Box>
  );
};

const Title = styled.h1`
  font-size: 24px;
  font-weight: 700;
`;

const TypeWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--space-sm);
  margin-top: var(--space-sm);
`;
