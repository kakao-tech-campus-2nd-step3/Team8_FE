import { fetchInstance } from '@/shared/api/instance';

const getCompleteCallbackPath = (callbackId: number) =>
  `/api/callbacks/complete/${callbackId}`;

export const CompleteCallback = async (callbackId: number) => {
  const response = await fetchInstance.put(getCompleteCallbackPath(callbackId));
  return response.data;
};
