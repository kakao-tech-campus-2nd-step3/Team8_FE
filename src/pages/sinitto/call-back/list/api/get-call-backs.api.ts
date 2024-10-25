import type { CallbacksResponse } from './types';
import { fetchInstance } from '@/shared/api/instance';

const getCallbacksPath = () => `/api/callbacks`;

export const getCallbacks = async (page: number, size: number) => {
  const response = await fetchInstance.get<CallbacksResponse>(
    getCallbacksPath(),
    {
      params: {
        page,
        size,
      },
    }
  );
  return response.data;
};
