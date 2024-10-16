import { CostHelloCallRequest } from './types/cost-hello-call.request';
import { CostHelloCallResponse } from './types/cost-hello-call.response';
import { fetchInstance } from '@/shared/api/instance';

const costHelloCallPath = () => `/api/hellocalls/guards/cost`;

export const CostHelloCallQueryKey = [costHelloCallPath()];

export const postCostHelloCall = async (
  data: CostHelloCallRequest
): Promise<CostHelloCallResponse> => {
  const response = await fetchInstance.post<CostHelloCallResponse>(
    costHelloCallPath(),
    data
  );

  return response.data;
};
