import type { CallbacksResponse } from '../types/callbacks.response';
import { fetchInstance } from '@/shared/api/instance';
import { useInfiniteQuery } from '@tanstack/react-query';

const getCallbacksPath = () => `/api/callbacks`;

const getCallbacks = async (page: number, size: number) => {
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

export const useGetCallbacks = (size: number) => {
  return useInfiniteQuery({
    queryKey: ['callbacks', size],
    queryFn: ({ pageParam = 0 }) => getCallbacks(pageParam, size),
    getNextPageParam: (lastPage) => {
      if (!lastPage.last) {
        return lastPage.number + 1;
      }
      return undefined;
    },
    initialPageParam: 0,
  });
};
