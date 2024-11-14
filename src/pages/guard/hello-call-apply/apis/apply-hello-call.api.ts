import { ApplyHelloCallRequest, ApplyHelloCallResponse } from '../types';
import { fetchInstance } from '@/shared/api/instance';

export const applyHelloCallPath = () => `/api/hellocalls/guards`;

export const postApplyHelloCall = async (
  data: ApplyHelloCallRequest
): Promise<ApplyHelloCallResponse> => {
  const response = await fetchInstance.post<ApplyHelloCallResponse>(
    applyHelloCallPath(),
    data
  );

  return response.data;
};
