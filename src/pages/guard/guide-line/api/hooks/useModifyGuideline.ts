import {
  modifyGuideline,
  ModifyGuidelineRequest,
} from '../modify-guideline.api';
import { useMutation, UseMutationResult } from '@tanstack/react-query';

export const useModifyGuideline = (
  refetchCallback: () => void,
  guidelineId: number
): UseMutationResult<string, Error, ModifyGuidelineRequest> => {
  return useMutation({
    mutationFn: (guideline: ModifyGuidelineRequest) =>
      modifyGuideline(guidelineId, guideline),
    onSuccess: (data: string) => {
      alert(data);
      refetchCallback();
    },
    onError: (error: Error) => {
      console.error(error);
    },
  });
};
