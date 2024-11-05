import { putAcceptHelloCall } from '../accept-hello-call.api';
import { SinittoHelloCallResponse } from '../types';
import { RouterPath } from '@/app/routes';
import { queryClient } from '@/shared';
import { useMutation, UseMutationResult } from '@tanstack/react-query';

export const usePutAcceptHelloCall = (
  callId: number
): UseMutationResult<SinittoHelloCallResponse, Error, void> => {
  return useMutation<SinittoHelloCallResponse, Error, void>({
    mutationFn: () => putAcceptHelloCall(callId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['helloCallCancel', callId] });

      alert(`안부전화 서비스가 수락되었습니다.`);
      window.location.href = RouterPath.SINITTO;
    },
    onError: (error) => {
      console.error('안부전화 서비스 수락에 실패했습니다.', error);
      alert('안부전화 서비스 수락에 실패했습니다.');
    },
  });
};
