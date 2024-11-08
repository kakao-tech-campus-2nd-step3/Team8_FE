import { useState } from 'react';

import {
  useChargePoint,
  useGetPointInfo,
  useWithdrawPoint,
} from '@/shared/hooks';
import { Box, Spinner, Button, Input } from '@chakra-ui/react';
import styled from '@emotion/styled';

type Props = {
  isSinitto: boolean;
};

const PointBox = ({ isSinitto }: Props) => {
  const { data: pointData, isLoading } = useGetPointInfo();
  const chargePointMutation = useChargePoint();
  const withdrawPointMutation = useWithdrawPoint();
  const [actionType, setActionType] = useState('');
  const [amount, setAmount] = useState('');

  const handleChargeButtonClick = () => {
    const parsedAmount = Number(amount);
    if (parsedAmount > 0) {
      chargePointMutation.mutate(parsedAmount);
      setAmount('');
      setActionType('');
    } else {
      alert('올바른 포인트를 입력해주세요.');
      setAmount('');
    }
  };

  const handleWithdrawButtonClick = () => {
    const parsedAmount = Number(amount);
    if (parsedAmount < 5000) {
      alert('포인트 출금은 5,000포인트 이상부터 가능합니다.');
      setAmount('');
    } else {
      if (parsedAmount <= Number(pointData?.price)) {
        withdrawPointMutation.mutate(parsedAmount);
        setAmount('');
        setActionType('');
      } else {
        alert('보유 포인트보다 더 많이 출금할 수 없습니다.');
        setAmount('');
      }
    }
  };

  if (isLoading) {
    return (
      <PointBoxLayout>
        <Spinner size='sm' />
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
        {pointData?.price.toLocaleString()} 포인트
      </Box>
      {actionType ? (
        <Box display='flex' flexDir='column' alignItems='center'>
          <Input
            m={1}
            w='100%'
            h='40px'
            bg='var(--color-white)'
            fontSize='16px'
            placeholder={
              actionType === 'charge' ? '충전할 포인트' : '출금할 포인트'
            }
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
              bg='var(--color-primary)'
              color='var(--color-white)'
              fontWeight='bold'
              mr={2}
              onClick={
                actionType === 'charge'
                  ? handleChargeButtonClick
                  : handleWithdrawButtonClick
              }
            >
              {actionType === 'charge' ? '충전 신청' : '출금 신청'}
            </Button>
            <Button
              w='100px'
              h='40px'
              fontSize='16px'
              bg='var(--color-gray)'
              color='var(--color-white)'
              fontWeight='bold'
              onClick={() => {
                setActionType('');
              }}
            >
              {actionType === 'charge' ? '충전 취소' : '출금 취소'}
            </Button>
          </ButtonContainer>
        </Box>
      ) : (
        <>
          <Box
            mt={1}
            bg='var(--color-primary)'
            color='var(--color-white)'
            w='90%'
            borderRadius='5px'
            fontSize='16px'
            fontWeight='bold'
            display='flex'
            justifyContent='center'
          >
            {isSinitto ? null : '보낼 계좌 : 3333-17-1913-736'}
          </Box>
          <ButtonContainer mt={2}>
            {isSinitto ? (
              <ActingButton onClick={() => setActionType('withdraw')}>
                출금하기
              </ActingButton>
            ) : (
              <ActingButton onClick={() => setActionType('charge')}>
                충전하기
              </ActingButton>
            )}
          </ButtonContainer>
        </>
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
  background-color: var(--color-secondary);
  border-radius: 10px;
  margin-top: 0.5rem;
`;

const ButtonContainer = styled(Box)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 338px;
  max-height: 70px;
  margin-bottom: 10px;
`;

const ActingButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  height: 30px;
  font-size: 16px;
  font-weight: 600;
  background-color: var(--color-white);
  border: 1px solid var(--color-white);
  border-radius: 5px;
  cursor: pointer;
`;
