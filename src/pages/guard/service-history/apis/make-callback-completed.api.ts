import { fetchInstance } from '@/shared/api/instance';

export const completeCallbackPath = (callbackId: number) =>
  `/api/callbacks/complete/${callbackId}`;

export const completeCallback = async (callbackId: number) => {
  const response = await fetchInstance.put(completeCallbackPath(callbackId));
  return response.data;
};
