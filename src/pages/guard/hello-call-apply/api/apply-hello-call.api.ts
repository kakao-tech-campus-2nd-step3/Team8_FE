import { ApplyHelloCallRequest } from './types/apply-hello-call.reqeust';
import { ApplyHelloCallResponse } from './types/apply-hello-call.response';
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
