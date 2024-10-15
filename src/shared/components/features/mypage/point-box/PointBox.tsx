import { useGetPointInfo } from '@/shared/hooks/usePoint';
import { Box, Text, Spinner } from '@chakra-ui/react';
import styled from '@emotion/styled';

// 경로를 맞게 수정

const PointBox = () => {
  const { data: pointData, isLoading, error } = useGetPointInfo();

  if (isLoading) {
    return (
      <PointBoxLayout>
        <Spinner size='sm' />
      </PointBoxLayout>
    );
  }

  if (error) {
    return (
      <PointBoxLayout>
        <Text color='red.300' fontWeight={700}>
          포인트 조회 중 오류가 발생했습니다.
        </Text>
      </PointBoxLayout>
    );
  }

  return (
    <PointBoxLayout>
      <Text ml={2} mt={2} fontSize='18px' fontWeight={700}>
        홍길동 님의 포인트
      </Text>
      <Text ml={2} mt={1} fontSize='18px' fontWeight={700}>
        {pointData?.price} 포인트
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f6e4e4;
  border: 1px solid #f6e4e4;
  border-radius: 10px;
  margin-top: 0.5rem;
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
  font-weight: 600;
  background-color: #fff;
  border: 1px solid #fff;
  border-radius: 5px;
  cursor: pointer;
`;
