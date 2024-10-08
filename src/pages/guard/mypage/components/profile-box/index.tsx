import { Box, Text } from '@chakra-ui/react';
import styled from '@emotion/styled';

const ProfileBox = () => {
  return (
    <ProfileBoxLayout>
      <TopContainer>
        <Text mt={3} fontSize='18px' fontWeight={700}>
          홍길동님 환영합니다.
        </Text>
        <ServiceManualBox mt={2} fontWeight={600}>
          서비스 이용 방법 한번에 이해하기!
        </ServiceManualBox>
      </TopContainer>
      <BottomContainer>
        <ButtonBox>시니어 등록하기</ButtonBox>
        <DivideLine></DivideLine>
        <ButtonBox>서비스 이용 현황</ButtonBox>
      </BottomContainer>
    </ProfileBoxLayout>
  );
};

export default ProfileBox;

const ProfileBoxLayout = styled(Box)`
  display: flex;
  flex-direction: column;
  background-color: #f2f2f2;
  width: 100%;
  max-width: 338px;
  height: 190px;
  border: 1px solid #909090;
  border-radius: 5px;
  margin-top: 0.5rem;
`;

const ServiceManualBox = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 300px;
  height: 40px;
  background-color: #2e2e2e;
  color: #fff;
  border: 1px solid #2e2e2e;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
`;

const TopContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 338px;
  align-items: center;
  height: 70%;
  max-height: 120px;
`;

const BottomContainer = styled(Box)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid #909090;
`;

const DivideLine = styled.div`
  width: 1px;
  height: 50px;
  background-color: #909090;
`;

const ButtonBox = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 49%;
  max-width: 169px;
  height: 70px;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
`;
