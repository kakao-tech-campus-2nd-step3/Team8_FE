import { postCostHelloCall } from '../cost-hello-call.api';
import { CostHelloCallRequest } from '../types/cost-hello-call.request';
import { CostHelloCallResponse } from '../types/cost-hello-call.response';
import { UseMutationResult, useMutation } from '@tanstack/react-query';

export const usePostCostHelloCall = (): UseMutationResult<
  CostHelloCallResponse,
  Error,
  CostHelloCallRequest
> => {
  return useMutation<CostHelloCallResponse, Error, CostHelloCallRequest>({
    mutationFn: (request: CostHelloCallRequest) => postCostHelloCall(request),
    onSuccess: () => {
      alert('안부전화 서비스가 신청되었습니다.');
    },
    onError: (error) => {
      console.error('안부전화 서비스 신청에 실패했습니다.', error);
      alert('안부전화 서비스 신청에 실패했습니다.');
    },
  });
};
