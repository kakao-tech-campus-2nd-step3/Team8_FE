import { Link } from 'react-router-dom';

import { useGetGuardInformation } from '../../api';
import { RouterPath } from '@/app/routes/path';
import { Box } from '@chakra-ui/react';
import styled from '@emotion/styled';

const GuardProfileBox = () => {
  const { data, isLoading, isError } = useGetGuardInformation();

  if (isLoading) return <div>로딩 중...</div>;
  if (isError) return <div>데이터를 가져오는 데 오류가 발생했습니다.</div>;

  return (
    <GuardProfileBoxLayout>
      <TopContainer>
        <Box
          display='flex'
          w='100%'
          pl={4}
          mt={3}
          fontSize='18px'
          fontWeight={700}
        >
          {data?.name} 님 환영합니다.
        </Box>
        <ServiceManualBox mt={2} fontWeight={600}>
          서비스 이용 방법 한번에 이해하기!
        </ServiceManualBox>
      </TopContainer>
      <BottomContainer>
        <Link to={RouterPath.SENIOR_REGISTER}>
          <ButtonBox>시니어 등록하기</ButtonBox>
        </Link>
        <DivideLine />
        <Link to={RouterPath.SERVICE_HISTORY}>
          <ButtonBox>서비스 이용 현황</ButtonBox>
        </Link>
      </BottomContainer>
    </GuardProfileBoxLayout>
  );
};

export default GuardProfileBox;

const GuardProfileBoxLayout = styled(Box)`
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
  width: 165px;
  max-width: 165px;
  height: 70px;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
`;
