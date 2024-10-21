import { addSeniorInfo } from '../add-senior-info.api';
import { SeniorRegisterValues as SeniorRegisterRequest } from '../types/senior-register.type';
import { useMutation, UseMutationResult } from '@tanstack/react-query';

export const useAddSeniorInfo = (): UseMutationResult<
  string,
  Error,
  SeniorRegisterRequest
> => {
  return useMutation({
    mutationFn: (seniorInfo: SeniorRegisterRequest) =>
      addSeniorInfo(seniorInfo),
    onSuccess: (data: string) => {
      alert(data);
    },
    onError: (error: Error) => {
      console.error(error);
    },
  });
};
