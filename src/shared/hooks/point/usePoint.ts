// usePoint.ts
import { useState } from 'react';

import { useChargePoint, useGetPointInfo, useWithdrawPoint } from '@/shared';

export const usePoint = () => {
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

  return {
    pointData: {
      data: pointData,
      isLoading,
    },
    states: {
      actionType,
      amount,
    },
    handlers: {
      setActionType,
      setAmount,
      handleChargeButtonClick,
      handleWithdrawButtonClick,
    },
  };
};
