import type { CallbackListResponse } from '../types';
import { fetchInstance } from '@/shared/api/instance';

const getCallbackListPath = () => `/api/callbacks`;

export const getCallbackList = async (
  page: number,
  size: number,
  sort: string = 'DESC'
) => {
  const response = await fetchInstance.get<CallbackListResponse>(
    getCallbackListPath(),
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
