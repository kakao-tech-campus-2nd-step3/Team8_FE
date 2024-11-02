import { chargePoint, ChargePointResponse } from '@/shared/api/point/point.api';
import { useMutation, UseMutationResult } from '@tanstack/react-query';

// 포인트 충전
export const useChargePoint = (): UseMutationResult<
  ChargePointResponse,
  Error,
  number
> => {
  return useMutation({
    mutationFn: (price) => chargePoint(price),
    onSuccess: () => {
      alert('포인트 충전 요청 완료했습니다.');
    },
    onError: (error: Error) => {
      console.error(error);
    },
  });
};
