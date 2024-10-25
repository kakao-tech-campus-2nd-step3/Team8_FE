import { addGuideline, AddGuidelineRequest } from '../add-guideline.api';
import { useMutation, UseMutationResult } from '@tanstack/react-query';

export const useAddGuideline = (
  refetchCallback: () => void
): UseMutationResult<string, Error, AddGuidelineRequest> => {
  return useMutation({
    mutationFn: (guideline: AddGuidelineRequest) => addGuideline(guideline),
    onSuccess: (data: string) => {
      alert(data);
      refetchCallback();
    },
    onError: (error: Error) => {
      console.error(error);
    },
  });
};
