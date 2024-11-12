import { getServiceList } from '../apis';
import { getServiceListPath } from '../apis/service-list.api';
import { ServiceListResponse } from '../types';
import { useInfiniteQuery } from '@tanstack/react-query';

export const ServiceListQueryKey = [getServiceListPath];

export const useGetServiceList = (size: number) => {
  return useInfiniteQuery<ServiceListResponse, Error>({
    queryKey: [ServiceListQueryKey, size],
    queryFn: ({ pageParam = 0 }) => getServiceList(Number(pageParam), size),
    getNextPageParam: (lastPage) => {
      if (!lastPage.last) {
        return lastPage.number + 1;
      }
      return undefined;
    },
    initialPageParam: 0,
  });
};
