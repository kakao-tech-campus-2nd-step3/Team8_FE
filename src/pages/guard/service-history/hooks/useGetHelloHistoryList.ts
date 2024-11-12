import { getHelloCallHistory, getHelloCallHistoryQueryKey } from '../apis';
import { HelloCallHistoryListResponse } from '../types';
import { useQuery } from '@tanstack/react-query';

export const useGetHelloHistoryList = () => {
  return useQuery<HelloCallHistoryListResponse, Error>({
    queryKey: [getHelloCallHistoryQueryKey()],
    queryFn: () => getHelloCallHistory(),
  });
};
