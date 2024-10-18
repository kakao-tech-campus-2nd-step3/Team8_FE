import { putCompleteHelloCall } from '../complete-hello-call';
import { CompleteHellCallResponse } from '../types/complete-hello-call.response';
import { useMutation } from '@tanstack/react-query';

export const usePutCompleteHelloCall = (callId: number) => {
  return useMutation<CompleteHellCallResponse, Error, void>({
    mutationFn: () => putCompleteHelloCall(callId),
    onSuccess: (data) => {
      alert(`안부전화 서비스가 완료되었습니다: ${data.message}`);
    },
    onError: (error) => {
      console.error('안부전화 서비스 완료에 실패했습니다.', error);
      alert('안부전화 서비스 완료에 실패했습니다.');
    },
  });
};
