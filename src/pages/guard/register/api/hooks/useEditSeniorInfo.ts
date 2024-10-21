import { editSeniorInfo } from '../senior-info.api';
import { SeniorRegisterValues as SeniorRegisterRequest } from '../types/senior-register.type';
import { useMutation, UseMutationResult } from '@tanstack/react-query';

// 시니어 수정 훅
export const useEditSeniorInfo = (
  refetchCallback: () => void
): UseMutationResult<
  string,
  Error,
  { seniorId: number; seniorInfo: SeniorRegisterRequest }
> => {
  return useMutation({
    mutationFn: ({ seniorId, seniorInfo }) =>
      editSeniorInfo(seniorId, seniorInfo),
    onSuccess: (data: string) => {
      alert(data);
      refetchCallback(); // 새로 데이터 가져오기 (콜백함수)
    },
    onError: (error: Error) => {
      console.error(error);
    },
  });
};
