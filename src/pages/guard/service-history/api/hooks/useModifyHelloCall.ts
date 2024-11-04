import {
  modifyHelloCall,
  ModifyHelloCallRequest,
} from '../modify-hello-call.api';
import { useMutation, UseMutationResult } from '@tanstack/react-query';

export const useModifyHelloCall = (
  callId: number,
  refetch: () => void
): UseMutationResult<string, Error, ModifyHelloCallRequest> => {
  return useMutation({
    mutationFn: (helloCall: ModifyHelloCallRequest) =>
      modifyHelloCall(callId, helloCall),
    onSuccess: () => {
      alert('안부전화가 수정되었습니다.');
      refetch();
    },
    onError: (error: Error) => {
      console.error(error);
    },
  });
};
