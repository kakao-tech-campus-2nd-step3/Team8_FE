import { getCallbackList } from '../apis';
import { useInfiniteQuery } from '@tanstack/react-query';

export const useGetCallbackList = (size: number) => {
  return useInfiniteQuery({
    queryKey: ['callbacks', size],
    queryFn: ({ pageParam = 0 }) => getCallbackList(pageParam, size),
    getNextPageParam: (lastPage) => {
      if (!lastPage.last) {
        return lastPage.number + 1;
      }
      return undefined;
    },
    initialPageParam: 0,
  });
};
