import { CompleteHellCallResponse } from '../types';
import { fetchInstance } from '@/shared/api/instance';

export const completeHelloCallPath = (callId: number) =>
  `/api/hellocalls/complete/${callId}`;

export const putCompleteHelloCall = async (
  callId: number
): Promise<CompleteHellCallResponse> => {
  const response = await fetchInstance.put<CompleteHellCallResponse>(
    completeHelloCallPath(callId)
  );

  return response.data;
};
