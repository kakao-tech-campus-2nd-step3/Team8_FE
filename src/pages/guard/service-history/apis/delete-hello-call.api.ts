import { fetchInstance } from '@/shared/api/instance';

const deleteHelloCallPath = (callId: number) =>
  `/api/hellocalls/guards/${callId}`;

export const deleteHelloCall = async (callId: number) => {
  const response = await fetchInstance.delete(deleteHelloCallPath(callId));
  return response.data;
};
