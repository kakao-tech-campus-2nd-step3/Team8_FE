import { costHelloCallPath, postCostHelloCall } from '../cost-hello-call.api';
import { CostHelloCallRequest } from '../types/cost-hello-call.request';
import { CostHelloCallResponse } from '../types/cost-hello-call.response';
import { UseMutationResult, useMutation } from '@tanstack/react-query';

export const CostHelloCallQueryKey = [costHelloCallPath()];

export const usePostCostHelloCall = (): UseMutationResult<
  CostHelloCallResponse,
  Error,
  CostHelloCallRequest
> => {
  return useMutation<CostHelloCallResponse, Error, CostHelloCallRequest>({
    mutationFn: (request: CostHelloCallRequest) => postCostHelloCall(request),
    onSuccess: (data) => {
      alert(`총 ${data.price} 포인트가 필요합니다.`);
    },
    onError: (error) => {
      console.log('서비스 이용 시간을 잘 못 입력하셨습니다.');
      console.error('포인트 계산에 실패했습니다.', error);
    },
  });
};
