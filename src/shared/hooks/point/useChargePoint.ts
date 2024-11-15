import { ErrorResponse } from 'react-router-dom';

import { AxiosError } from 'axios';

import { queryClient } from '@/shared/api';
import { chargePoint, ChargePointResponse } from '@/shared/api/point/point.api';
import { POINTS_QUERY_KEYS } from '@/shared/constants';
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
      alert(
        '포인트 충전 요청이 접수되었습니다.\n카카오 메시지 "나에게 보내기"를 확인하여 해당 계좌로 입금해주세요.\n관리자 확인 후 포인트가 충전됩니다.'
      );
      queryClient.invalidateQueries({ queryKey: POINTS_QUERY_KEYS.INFO });
      queryClient.invalidateQueries({
        queryKey: POINTS_QUERY_KEYS.LOGS,
      });
    },
    onError: (error) => {
      const axiosError = error as AxiosError<ErrorResponse>;
      if (axiosError.response?.status === 409) {
        alert('이미 진행중인 포인트 충전 요청이 존재합니다.');
      } else {
        console.error('포인트 충전 요청에 실패했습니다.', error);
        alert('포인트 충전 요청에 실패했습니다.');
      }
    },
  });
};
