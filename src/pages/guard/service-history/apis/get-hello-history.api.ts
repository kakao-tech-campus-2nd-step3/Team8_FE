import { HelloCallHistory, HelloCallHistoryListResponse } from '../types';
import { fetchInstance } from '@/shared/api/instance';

const getHelloCallHistoryPath = () => '/api/hellocalls/guards/lists';

export const getHelloCallHistoryQueryKey = () => [getHelloCallHistoryPath()];

export const getHelloCallHistory =
  async (): Promise<HelloCallHistoryListResponse> => {
    const response = await fetchInstance.get<HelloCallHistory[]>(
      getHelloCallHistoryPath()
    );
    return response.data;
  };
