import { HelloCallQueryKey, putHelloCall } from '../hello-call-api';
import { HelloCallRequest } from '../types/hello-call.response';
import { queryClient } from '@/shared/api/instance';
import { UseMutationResult, useMutation } from '@tanstack/react-query';

export const usePutHelloCall = (
  callId: number
): UseMutationResult<HelloCallRequest, Error, HelloCallRequest> => {
  return useMutation<HelloCallRequest, Error, HelloCallRequest>({
    mutationFn: (data) => putHelloCall(callId, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [HelloCallQueryKey, callId] });
      alert('안부전화 서비스가 수정되었습니다.');
    },
    onError: (error) => {
      console.error('안부전화 서비스 수정에 실패했습니다.', error);
      alert('안부전화 서비스 수정에 실패했습니다.');
    },
  });
};
