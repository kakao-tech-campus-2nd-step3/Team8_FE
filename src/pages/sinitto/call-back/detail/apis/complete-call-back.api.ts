import { fetchInstance } from '@/shared';

const getCompleteCallbackPath = (callbackId: number) =>
  `/api/callbacks/pendingComplete/${callbackId}`;

export const CompleteCallback = async (callbackId: number) => {
  const response = await fetchInstance.put(getCompleteCallbackPath(callbackId));
  return response.data;
};
