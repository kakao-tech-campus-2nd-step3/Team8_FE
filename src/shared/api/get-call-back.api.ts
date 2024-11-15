import type { CallbackResponse } from '../types';
import { fetchInstance } from '@/shared/api/instance';

const getCallbackPath = (callbackId: string) => `/api/callbacks/${callbackId}`;

export const getCallback = async (callbackId: string) => {
  const response = await fetchInstance.get<CallbackResponse>(
    getCallbackPath(callbackId)
  );
  return response.data;
};
