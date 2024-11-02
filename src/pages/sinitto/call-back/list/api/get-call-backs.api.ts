import type { CallbackListResponse } from './types';
import { fetchInstance } from '@/shared/api/instance';

const getCallbacksPath = () => `/api/callbacks`;

export const getCallbacks = async (
  page: number,
  size: number,
  sort: string = 'DESC'
) => {
  const response = await fetchInstance.get<CallbackListResponse>(
    getCallbacksPath(),
    {
      params: {
        page,
        size,
        sort,
      },
    }
  );
  return response.data;
};
