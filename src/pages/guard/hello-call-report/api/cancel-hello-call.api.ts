import { HelloCallResponse } from './types/hello-call.response';
import { fetchInstance } from '@/shared/api/instance';

const getCancelHelloCallPath = (callId: number) =>
  `/api/hellocalls/cancel/${callId}`;

export const putCancelHelloCall = async (
  callId: number
): Promise<HelloCallResponse> => {
  const response = await fetchInstance.put<HelloCallResponse>(
    getCancelHelloCallPath(callId)
  );

  return response.data;
};
