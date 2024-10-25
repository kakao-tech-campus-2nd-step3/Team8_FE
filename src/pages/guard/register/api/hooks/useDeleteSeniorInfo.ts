import { deleteSeniorInfo } from '../senior-info.api';
import { useMutation, UseMutationResult } from '@tanstack/react-query';

// 시니어 삭제 훅
export const useDeleteSeniorInfo = (
  refetchCallback: () => void
): UseMutationResult<string, Error, number> => {
  return useMutation({
    mutationFn: (seniorId: number) => deleteSeniorInfo(seniorId),
    onSuccess: (data: string) => {
      alert(data);
      refetchCallback();
    },
    onError: (error: Error) => {
      console.error(error);
    },
  });
};
