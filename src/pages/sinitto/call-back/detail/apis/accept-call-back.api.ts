import { fetchInstance } from '@/shared/api/instance';

const getacceptCallbackPath = (callbackId: number) =>
  `/api/callbacks/accept/${callbackId}`;

export const acceptCallback = async (callbackId: number) => {
  const response = await fetchInstance.put(getacceptCallbackPath(callbackId));
  return response.data;
};
