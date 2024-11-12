import { AcceptedCallBackListResponse } from '../types';
import { fetchInstance } from '@/shared';

export const getAcceptedCallBackListPath = '/api/callbacks/sinitto/accepted';

export const getAcceptedCallBackList =
  async (): Promise<AcceptedCallBackListResponse> => {
    const response = await fetchInstance.get<AcceptedCallBackListResponse>(
      getAcceptedCallBackListPath
    );
    return response.data;
  };
