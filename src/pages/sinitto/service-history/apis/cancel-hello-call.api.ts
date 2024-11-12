import { SinittoHelloCallResponse } from '../types';
import { fetchInstance } from '@/shared/api/instance';

const putCancelHelloCallPath = (callId: number) =>
  `/api/hellocalls/cancel/${callId}`;

export const putCancelHelloCall = async (
  callId: number
): Promise<SinittoHelloCallResponse> => {
  const response = await fetchInstance.put<SinittoHelloCallResponse>(
    putCancelHelloCallPath(callId)
  );

  return response.data;
};
