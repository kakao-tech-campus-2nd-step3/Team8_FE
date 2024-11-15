import { ErrorResponse } from 'react-router-dom';

import { AxiosError } from 'axios';

import { queryClient } from '@/shared/api';
import { withdrawPoint } from '@/shared/api/point';
import { POINTS_QUERY_KEYS } from '@/shared/constants';
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
      queryClient.invalidateQueries({ queryKey: POINTS_QUERY_KEYS.INFO });
      queryClient.invalidateQueries({
        queryKey: POINTS_QUERY_KEYS.LOGS,
      });
    },
    onError: (error: Error) => {
      const axiosError = error as AxiosError<ErrorResponse>;
      if (axiosError.response?.status === 409) {
        alert('이미 진행중인 포인트 출금 요청이 존재합니다.');
      } else {
        console.error(error);
      }
    },
  });
};
