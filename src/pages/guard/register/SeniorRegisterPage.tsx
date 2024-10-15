import { useState } from 'react';

import { SeniorInfo } from './components';
import { SENIOR_DATA } from './data';
import { Box, Flex, Input, Text } from '@chakra-ui/react';
import styled from '@emotion/styled';

export const SeniorRegisterPage = () => {
  const [name, setName] = useState('');
  const [seniorName, setSeniorName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleRegister = () => {
    setName('');
    setSeniorName('');
    setPhoneNumber('');
  };

  return (
    <Container>
      <Flex
        h='100%'
        flexDir='column'
        alignItems='center'
        flexGrow={1}
        overflowY='auto'
      >
        {SENIOR_DATA.map((senior) => (
          <SeniorInfo key={senior.id} senior={senior} />
        ))}
      </Flex>
      <RegisterBox>
        <InputBox>
          <InputText>등록 이름</InputText>
          <RegisterInput
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </InputBox>
        <InputBox>
          <InputText>시니어의 성함</InputText>
          <RegisterInput
            value={seniorName}
            onChange={(e) => setSeniorName(e.target.value)}
          />
        </InputBox>
        <InputBox>
          <InputText>시니어의 전화번호</InputText>
          <RegisterInput
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </InputBox>
        <StyledButton onClick={handleRegister}>시니어 등록</StyledButton>
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
  height: 360px;
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

const InputText = styled(Text)`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const RegisterInput = styled(Input)`
  background-color: var(--color-white);
  border: none;
  font-size: 1rem;
`;

const StyledButton = styled.button`
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
