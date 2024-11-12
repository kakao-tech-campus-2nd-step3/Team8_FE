import {
  CallbackHistoryRequestParams,
  CallbackHistoryResponse,
} from '../types';
import { fetchInstance } from '@/shared';

const getCallbackHistoryPath = '/api/callbacks/guard/requested';

export const getCallbackHistoryQueryKey = (page: number) => [
  getCallbackHistoryPath,
  page,
];

export const getCallbackHistory = async (
  params: CallbackHistoryRequestParams
): Promise<CallbackHistoryResponse> => {
  const response = await fetchInstance.get(getCallbackHistoryPath, {
    params,
  });
  return response.data;
};
