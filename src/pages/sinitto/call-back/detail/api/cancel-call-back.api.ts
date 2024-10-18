import { fetchInstance } from '@/shared/api/instance';

const getCancelCallbackPath = (callbackId: number) =>
  `/api/callbacks/cancel/${callbackId}`;

export const CancelCallback = async (callbackId: number) => {
  const response = await fetchInstance.put(getCancelCallbackPath(callbackId));
  return response.data;
};
