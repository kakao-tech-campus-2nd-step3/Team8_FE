import {
  getHelloCallHistory,
  getHelloCallHistoryQueryKey,
  HelloCallHistoryListResponse,
} from '../get-hello-history.api';
import { useQuery } from '@tanstack/react-query';

export const useGetHelloHistoryList = () => {
  return useQuery<HelloCallHistoryListResponse, Error>({
    queryKey: [getHelloCallHistoryQueryKey()],
    queryFn: () => getHelloCallHistory(),
  });
};
