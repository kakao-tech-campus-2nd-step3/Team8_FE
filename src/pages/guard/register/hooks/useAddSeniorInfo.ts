import { addSeniorInfo } from '../api';
import { SeniorRegisterValues as SeniorRegisterRequest } from '../api/types/senior-register.type';
import { useMutation, UseMutationResult } from '@tanstack/react-query';

// 시니어 추가 훅
export const useAddSeniorInfo = (
  refetchCallback: () => void
): UseMutationResult<string, Error, SeniorRegisterRequest> => {
  return useMutation({
    mutationFn: (seniorInfo: SeniorRegisterRequest) =>
      addSeniorInfo(seniorInfo),
    onSuccess: (data: string) => {
      alert(data);
      refetchCallback();
    },
    onError: (error: Error) => {
      console.error(error);
    },
  });
};
