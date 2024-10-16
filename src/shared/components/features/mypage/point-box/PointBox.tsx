import { useState } from 'react';

import {
  useGetPointInfo,
  useChargePoint,
  useWithdrawPoint,
} from '@/shared/hooks/point/usePoint';
import { Box, Text, Spinner, Button, Input } from '@chakra-ui/react';
import styled from '@emotion/styled';

const PointBox = () => {
  const { data: pointData, isLoading, error } = useGetPointInfo();
  const chargePointMutation = useChargePoint();
  const withdrawPointMutation = useWithdrawPoint();
  const [isCharging, setIsCharging] = useState(false);
  const [isWithdrawing, setIsWithdrawing] = useState(false);
  const [amount, setAmount] = useState('');

  const handleChargeButtonClick = () => {
    const parsedAmount = Number(amount);
    if (parsedAmount > 0) {
      chargePointMutation.mutate(parsedAmount);
      setAmount('');
      setIsCharging(false);
    }
  };

  const handleWithdrawButtonClick = () => {
    const parsedAmount = Number(amount);
    if (parsedAmount > 0) {
      withdrawPointMutation.mutate(parsedAmount);
      setAmount('');
      setIsWithdrawing(false);
    }
  };

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
      <Box
        w='100%'
        display='flex'
        justifyContent='flex-start'
        pl={3}
        mt={2}
        fontSize='20px'
        fontWeight={700}
      >
        내 포인트
      </Box>
      <Box
        w='100%'
        display='flex'
        justifyContent='flex-start'
        pl={3}
        mt={1}
        fontSize='18px'
        fontWeight={700}
      >
        {pointData?.price} 포인트
      </Box>
      {isCharging || isWithdrawing ? (
        <Box display='flex' flexDir='column' alignItems='center'>
          <Input
            m={1}
            w='100%'
            h='40px'
            placeholder={isCharging ? '충전할 포인트' : '출금할 포인트'}
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            type='number'
            min='1'
          />
          <ButtonContainer>
            <Button
              w='100px'
              h='40px'
              fontSize='16px'
              onClick={
                isCharging ? handleChargeButtonClick : handleWithdrawButtonClick
              }
              colorScheme='teal'
            >
              {isCharging ? '충전' : '출금'}
            </Button>
            <Button
              w='100px'
              h='40px'
              fontSize='16px'
              onClick={() => {
                setIsCharging(false);
                setIsWithdrawing(false);
              }}
              colorScheme='red'
            >
              취소
            </Button>
          </ButtonContainer>
        </Box>
      ) : (
        <ButtonContainer mt={2}>
          <ButtonBox onClick={() => setIsCharging(true)}>충전하기</ButtonBox>
          <ButtonBox onClick={() => setIsWithdrawing(true)}>출금하기</ButtonBox>
        </ButtonContainer>
      )}
    </PointBoxLayout>
  );
};

export default PointBox;

const PointBoxLayout = styled(Box)`
  width: 100%;
  max-width: 338px;
  height: auto;
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
  margin-bottom: 10px;
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
