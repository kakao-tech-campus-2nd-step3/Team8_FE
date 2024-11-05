import { putCancelHelloCall } from '../cancel-hello-call.api';
import { SinittoHelloCallResponse } from '../types';
import { queryClient } from '@/shared/api/instance';
import { UseMutationResult, useMutation } from '@tanstack/react-query';

export const usePutCancelHelloCall = (
  callId: number
): UseMutationResult<SinittoHelloCallResponse, Error, void> => {
  return useMutation<SinittoHelloCallResponse, Error, void>({
    mutationFn: () => putCancelHelloCall(callId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['helloCall', callId] });
    },
    onError: (error) => {
      console.error('안부전화 서비스 취소에 실패했습니다.', error);
      alert('안부전화 서비스 취소에 실패했습니다.');
    },
  });
};
