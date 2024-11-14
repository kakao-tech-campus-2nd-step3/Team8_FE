import { completeCallback } from '../apis';
import { useMutation, UseMutationResult } from '@tanstack/react-query';

export const useCompleteCallback = (
  refetch: () => void
): UseMutationResult<string, Error, number> => {
  return useMutation({
    mutationFn: (callbackId: number) => completeCallback(callbackId),
    onSuccess: async () => {
      alert('콜백 서비스를 완료 처리하였습니다.');
      refetch();
    },
    onError: (error: Error) => {
      console.error(error);
    },
  });
};
