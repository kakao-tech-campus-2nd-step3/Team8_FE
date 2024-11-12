import { getCallbackHistory, getCallbackHistoryQueryKey } from '../apis';
import { CallbackHistoryRequest, CallbackHistoryResponse } from '../types';
import { useQuery } from '@tanstack/react-query';

export const useGetCallbackHistory = (page: number, size: number) => {
  const params: CallbackHistoryRequest = {
    page,
    size,
  };

  return useQuery<CallbackHistoryResponse, Error>({
    queryKey: getCallbackHistoryQueryKey(page),
    queryFn: () => getCallbackHistory(params),
  });
};
