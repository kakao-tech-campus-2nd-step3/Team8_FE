import {
  applyHelloCallPath,
  postApplyHelloCall,
} from '../apply-hello-call.api';
import { ApplyHelloCallRequest, ApplyHelloCallResponse } from '../types';
import { UseMutationResult, useMutation } from '@tanstack/react-query';

export const ApplyHelloCallQueryKey = [applyHelloCallPath()];

export const usePostApplyHelloCall = (): UseMutationResult<
  ApplyHelloCallResponse,
  Error,
  ApplyHelloCallRequest
> => {
  return useMutation<ApplyHelloCallResponse, Error, ApplyHelloCallRequest>({
    mutationFn: (data: ApplyHelloCallRequest) => postApplyHelloCall(data),
    onSuccess: () => {
      alert('안부전화 서비스가 신청되었습니다.');
    },
    onError: (error) => {
      console.error('안부전화 서비스 신청에 실패했습니다.', error);
      alert('안부전화 서비스 신청에 실패했습니다.');
    },
  });
};
