import { modifyGuardInformation } from '../';
import { GuardInformationRequest } from '../types';
import { useMutation, UseMutationResult } from '@tanstack/react-query';

// 본인 정보 수정
export const useModifyGuardInformation = (): UseMutationResult<
  string,
  Error,
  GuardInformationRequest
> => {
  return useMutation({
    mutationFn: (guardInfo) => modifyGuardInformation(guardInfo),
    onSuccess: (data: string) => {
      alert(data);
    },
    onError: (error: Error) => {
      console.error(error);
    },
  });
};
