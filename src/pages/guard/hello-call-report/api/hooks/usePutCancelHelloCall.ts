import { putCancelHelloCall } from '../cancel-hello-call.api';
import { HelloCallResponse } from '../types/hello-call.response';
import { queryClient } from '@/shared/api/instance';
import { UseMutationResult, useMutation } from '@tanstack/react-query';

export const usePutCancelHelloCall = (
  callId: number
): UseMutationResult<HelloCallResponse, Error, void> => {
  return useMutation<HelloCallResponse, Error, void>({
    mutationFn: () => putCancelHelloCall(callId),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ['helloCall', callId] });
      alert(`안부전화 서비스가 취소되었습니다: ${data.message}`);
    },
    onError: (error) => {
      console.error('안부전화 서비스 취소에 실패했습니다.', error);
      alert('안부전화 서비스 취소에 실패했습니다.');
    },
  });
};
