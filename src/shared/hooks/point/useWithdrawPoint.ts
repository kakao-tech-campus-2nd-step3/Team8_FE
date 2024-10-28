import { withdrawPoint } from '@/shared/api/point';
import { useMutation, UseMutationResult } from '@tanstack/react-query';

// 포인트 출금
export const useWithdrawPoint = (): UseMutationResult<
  number,
  Error,
  number
> => {
  return useMutation({
    mutationFn: (price) => withdrawPoint(price),
    onSuccess: (price: number) => {
      alert(`${price} 포인트 출금 신청 완료되었습니다.`);
    },
    onError: (error: Error) => {
      console.error(error);
    },
  });
};
