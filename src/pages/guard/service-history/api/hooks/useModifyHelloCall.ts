import {
  modifyHelloCall,
  ModifyHelloCallRequest,
} from '../modify-hello-call.api';
import { useMutation, UseMutationResult } from '@tanstack/react-query';

export const useModifyHelloCall = (
  callId: number
): UseMutationResult<string, Error, ModifyHelloCallRequest> => {
  return useMutation({
    mutationFn: (helloCall: ModifyHelloCallRequest) =>
      modifyHelloCall(callId, helloCall),
    onSuccess: () => {
      alert('안부전화가 수정되었습니다.');
    },
    onError: (error: Error) => {
      console.error(error);
    },
  });
};
