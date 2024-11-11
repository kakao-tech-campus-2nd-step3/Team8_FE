import { useState } from 'react';

import { useChargePoint, useGetPointInfo, useWithdrawPoint } from '@/shared';
import { BasicButton } from '@/shared/components';
import { Box, Flex, Spinner, Text, Input } from '@chakra-ui/react';
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
    <Flex w='full' flexDir='column' gap='var(--space-sm)'>
      <PointBoxLayout>
        <Flex w='full' justifyContent='space-between' mb='var(--space-sm)'>
          <Text fontSize='20px' fontWeight={700}>
            내 포인트
          </Text>
          <Text fontSize='20px' fontWeight={700}>
            {pointData?.price.toLocaleString()} 포인트
          </Text>
        </Flex>
        {actionType ? (
          <Flex
            w='full'
            flexDir='column'
            alignItems='center'
            gap='var(--space-xs)'
          >
            <Input
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
              <BasicButton
                themeType='gray'
                height='40px'
                onClick={() => {
                  setActionType('');
                }}
              >
                {actionType === 'charge' ? '충전 취소' : '출금 취소'}
              </BasicButton>
              <BasicButton
                themeType='default'
                height='40px'
                onClick={
                  actionType === 'charge'
                    ? handleChargeButtonClick
                    : handleWithdrawButtonClick
                }
              >
                {actionType === 'charge' ? '충전 신청' : '출금 신청'}
              </BasicButton>
            </ButtonContainer>
          </Flex>
        ) : (
          <ButtonContainer>
            {isSinitto ? (
              <BasicButton
                themeType='default'
                height='40px'
                onClick={() => setActionType('withdraw')}
              >
                출금하기
              </BasicButton>
            ) : (
              <BasicButton
                themeType='default'
                height='40px'
                onClick={() => setActionType('charge')}
              >
                충전하기
              </BasicButton>
            )}
          </ButtonContainer>
        )}
        <Text
          fontSize='var(--font-size-sm)'
          color='var(--color-gray)'
          mt='var(--space-sm)'
        >
          포인트 충전 요청 후 꼭 카카오톡 나에게 보내기 메세지를 확인해주세요.
        </Text>
      </PointBoxLayout>
    </Flex>
  );
};

export default PointBox;

const PointBoxLayout = styled(Box)`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--color-secondary);
  border-radius: 5px;
  padding: var(--space-md);
`;

const ButtonContainer = styled(Box)`
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: var(--space-xs);
`;
