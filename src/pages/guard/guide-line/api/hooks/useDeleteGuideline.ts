import { deleteGuideline } from '../delete-guideline.api';
import { useMutation, UseMutationResult } from '@tanstack/react-query';

export const useDeleteGuideline = (
  refetchCallback: () => void,
  guidelineId: number
): UseMutationResult<string, Error, number> => {
  return useMutation({
    mutationFn: () => deleteGuideline(guidelineId),
    onSuccess: (data: string) => {
      alert(data);
      refetchCallback();
    },
    onError: (error: Error) => {
      console.error(error);
    },
  });
};
