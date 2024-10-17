import { CallbacksResponse } from './types';
import { fetchInstance } from '@/shared/api/instance';

const getCallbackListPath = '/api/callbacks';

export const CallbackListQueryKey = (page: number, size: number) => [
  getCallbackListPath,
  page,
  size,
];

export const getCallbackList = async (
  page: number,
  size: number
): Promise<CallbacksResponse> => {
  const response = await fetchInstance.get(getCallbackListPath, {
    params: {
      pageable: {
        page,
        size,
      },
    },
  });
  return response.data;
};
