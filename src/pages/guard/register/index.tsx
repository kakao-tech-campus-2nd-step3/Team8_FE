import { useState } from 'react';

import SeniorInfo from './components/seniorInfo/seniorInfoBox';
import dummySeniorData from './data';
import Button from '@/shared/components/common/button';
import { Box, Flex, Input, Text } from '@chakra-ui/react';
import styled from '@emotion/styled';

const SeniorRegisterPage = () => {
  const [name, setName] = useState('');
  const [seniorName, setSeniorName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleRegister = () => {
    const seniorData = {
      name,
      seniorName,
      phoneNumber,
    };

    // API 호출 -> seniorData를 서버에 전송
    console.log('등록된 시니어 :', seniorData);

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
        {dummySeniorData.map((senior) => (
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
        <Button onClick={handleRegister}>시니어 등록</Button>
      </RegisterBox>
    </Container>
  );
};

export default SeniorRegisterPage;

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
  background-color: #f2f2f2;
  border: 1px solid #f2f2f2;
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
  background-color: #fff;
  border: none;
  font-size: 1rem;
`;
