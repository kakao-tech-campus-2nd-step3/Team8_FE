import {
  cancelHelloCallPath,
  putCancelHelloCall,
} from '../cancel-hello-call.api';
import { CancelHelloCallResponse } from '../types';
import { queryClient } from '@/shared/api/instance';
import { useMutation, UseMutationResult } from '@tanstack/react-query';

const CancelHelloCallQueryKey = [cancelHelloCallPath];

export const usePutCancelHelloCall = (
  callId: number
): UseMutationResult<CancelHelloCallResponse, Error, void> => {
  return useMutation<CancelHelloCallResponse, Error, void>({
    mutationFn: () => putCancelHelloCall(callId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: CancelHelloCallQueryKey });
      alert('안부전화 서비스가 취소되었습니다.');
    },
    onError: (error) => {
      console.error('안부전화 서비스 취소에 실패했습니다.', error);
      alert('안부전화 서비스 취소에 실패했습니다.');
    },
  });
};
