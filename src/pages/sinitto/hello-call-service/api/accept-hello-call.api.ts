import { SinittoHelloCallResponse } from './types';
import { fetchInstance } from '@/shared';

const putAcceptHelloCallPath = (callId: number) =>
  `/api/hellocalls/accept/${callId}`;

export const putAcceptHelloCall = async (
  callId: number
): Promise<SinittoHelloCallResponse> => {
  const response = await fetchInstance.put<SinittoHelloCallResponse>(
    putAcceptHelloCallPath(callId)
  );

  return response.data;
};
