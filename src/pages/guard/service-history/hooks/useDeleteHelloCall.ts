import { deleteHelloCall } from '../apis';
import { useMutation, UseMutationResult } from '@tanstack/react-query';

export const useDeleteHelloCall = (
  refetch: () => void
): UseMutationResult<string, Error, number> => {
  return useMutation({
    mutationFn: (callId: number) => deleteHelloCall(callId),
    onSuccess: () => {
      alert('안부전화가 삭제되었습니다.');
      refetch();
    },
  });
};
