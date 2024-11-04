import { fetchInstance } from '@/shared';

export type CallbackHistoryRequestParams = {
  page: number;
  size: number;
};

export type CallbackHistoryResponse = {
  totalElements: number;
  totalPages: number;
  first: boolean;
  last: boolean;
  size: number;
  content: CallbackHistory[];
  number: number;
  empty: boolean;
};

export type CallbackHistory = {
  callbackId: number;
  seniorName: string;
  postTime: string;
  status: string;
};

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
