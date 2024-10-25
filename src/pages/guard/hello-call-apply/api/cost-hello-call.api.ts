import { CostHelloCallRequest, CostHelloCallResponse } from './types';
import { fetchInstance } from '@/shared/api/instance';

export const costHelloCallPath = () => `/api/hellocalls/guards/cost`;

export const postCostHelloCall = async (
  data: CostHelloCallRequest
): Promise<CostHelloCallResponse> => {
  const response = await fetchInstance.post<CostHelloCallResponse>(
    costHelloCallPath(),
    data
  );

  return response.data;
};
