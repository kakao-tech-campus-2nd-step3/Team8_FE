import { getCallbackHistory, getCallbackHistoryQueryKey } from '../api';
import {
  CallbackHistoryRequestParams,
  CallbackHistoryResponse,
} from '../types';
import { useQuery } from '@tanstack/react-query';

export const useGetCallbackHistory = (page: number, size: number) => {
  const params: CallbackHistoryRequestParams = {
    page,
    size,
  };

  return useQuery<CallbackHistoryResponse, Error>({
    queryKey: getCallbackHistoryQueryKey(page),
    queryFn: () => getCallbackHistory(params),
  });
};
