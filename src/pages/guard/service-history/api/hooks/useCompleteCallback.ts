import { completeCallback } from '../make-callback-completed.api';
import { useMutation, UseMutationResult } from '@tanstack/react-query';

export const useCompleteCallback = (): UseMutationResult<
  string,
  Error,
  number
> => {
  return useMutation({
    mutationFn: (callbackId: number) => completeCallback(callbackId),
    onError: (error: Error) => {
      console.error(error);
    },
  });
};
