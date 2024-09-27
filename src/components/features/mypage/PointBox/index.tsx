import { Box, Text } from '@chakra-ui/react';
import styled from '@emotion/styled';

const PointBox = () => {
  return (
    <PointBoxLayout>
      <Text ml={2} mt={2} fontSize='18px' fontWeight={700}>
        홍길동 님의 포인트
      </Text>
      <Text ml={2} mt={1} fontSize='18px' fontWeight={700}>
        15,000 Point
      </Text>
      <ButtonContainer mt={2}>
        <ButtonBox>출금하기</ButtonBox>
        <ButtonBox>충전하기</ButtonBox>
      </ButtonContainer>
    </PointBoxLayout>
  );
};

export default PointBox;

const PointBoxLayout = styled(Box)`
  width: 100%;
  max-width: 338px;
  height: 130px;
  background-color: 
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color : #F6E4E4;
  border: 1px solid #F6E4E4;
  border-radius: 10px;
`;

const ButtonContainer = styled(Box)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  max-width: 338px;
  height: 30%;
  max-height: 40px;
`;

const ButtonBox = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 145px;
  height: 100%;
  max-height: 30px;
  font-size: 16px;
  font-weight: 500;
  background-color: #fff;
  border: 1px solid #fff;
  border-radius: 5px;
  cursor: pointer;
`;
