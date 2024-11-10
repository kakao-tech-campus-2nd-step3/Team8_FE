import { SinittoHelloCallResponse } from './types';
import { fetchInstance } from '@/shared/api/instance';

const getCancelHelloCallPath = (callId: number) =>
  `/api/hellocalls/cancel/${callId}`;

export const putCancelHelloCall = async (
  callId: number
): Promise<SinittoHelloCallResponse> => {
  const response = await fetchInstance.put<SinittoHelloCallResponse>(
    getCancelHelloCallPath(callId)
  );

  return response.data;
};
