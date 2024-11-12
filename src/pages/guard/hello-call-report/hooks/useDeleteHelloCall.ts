import { deleteHelloCall, HelloCallQueryKey } from '../hello-call-api';
import { queryClient } from '@/shared/api/instance';
import { useMutation } from '@tanstack/react-query';

export const useDeleteHelloCall = (callId: number) => {
  return useMutation({
    mutationFn: () => deleteHelloCall(callId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [HelloCallQueryKey, callId] });
      alert('안부전화 서비스 신청이 취소되었습니다.');
    },
    onError: (error) => {
      console.error('안부전화 서비스 신청 취소에 실패하였습니다.', error);
      alert('요청이 실패하였습니다.');
    },
  });
};
