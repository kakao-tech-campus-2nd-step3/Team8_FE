import { CompleteHellCallResponse } from './types/complete-hello-call.response';
import { fetchInstance } from '@/shared/api/instance';

export const completeHelloCallPath = (callId: number) =>
  `/api/hellocalls/complete/${callId}`;

export const CompleteHelloCallQueryKey = [completeHelloCallPath];

export const putCompleteHelloCall = async (
  callId: number
): Promise<CompleteHellCallResponse> => {
  const response = await fetchInstance.put<CompleteHellCallResponse>(
    completeHelloCallPath(callId)
  );

  return response.data;
};
