import { CancelHelloCallResponse } from './types';
import { fetchInstance } from '@/shared/api/instance';

export const cancelHelloCallPath = (callId: number) =>
  `/api/hellocalls/cancel/${callId}`;

export const CancelHelloCallQueryKey = [cancelHelloCallPath];

export const putCancelHelloCall = async (
  callId: number
): Promise<CancelHelloCallResponse> => {
  const response = await fetchInstance.put<CancelHelloCallResponse>(
    cancelHelloCallPath(callId)
  );

  return response.data;
};
