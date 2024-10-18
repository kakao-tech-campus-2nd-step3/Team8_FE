import { getCallbacks } from '../get-call-backs.api';
import { useInfiniteQuery } from '@tanstack/react-query';

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
