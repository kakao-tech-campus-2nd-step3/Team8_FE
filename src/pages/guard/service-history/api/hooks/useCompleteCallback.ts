import { getCallbackHistoryQueryKey } from '../get-callback-history.api';
import { completeCallback } from '../make-callback-completed.api';
import { queryClient } from '@/shared';
import { useMutation, UseMutationResult } from '@tanstack/react-query';

export const useCompleteCallback = (): UseMutationResult<
  string,
  Error,
  number
> => {
  return useMutation({
    mutationFn: (callbackId: number) => completeCallback(callbackId),
    onSuccess: () => {
      alert('콜백 서비스를 완료 처리하였습니다.');
      queryClient.invalidateQueries({
        queryKey: getCallbackHistoryQueryKey(1),
      });
    },
    onError: (error: Error) => {
      console.error(error);
    },
  });
};
