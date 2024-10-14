import { getServiceList, ServiceListQueryKey } from '../service-list.api';
import { ServiceListResponse } from '../types';
import { useInfiniteQuery } from '@tanstack/react-query';

export const useGetServiceList = () => {
  return useInfiniteQuery<ServiceListResponse, Error>({
    queryKey: ServiceListQueryKey,
    queryFn: ({ pageParam = 0 }) => getServiceList(pageParam as number),
    getNextPageParam: (lastPage, allPages) =>
      lastPage.content.length > 0 ? allPages.length : undefined,
    initialPageParam: 0,
  });
};
