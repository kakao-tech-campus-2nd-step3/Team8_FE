import { ServiceListResponse } from '../types';
import { fetchInstance } from '@/shared/api/instance';

export const getServiceListPath = `/api/hellocalls/sinittos/list`;

export const getServiceList = async (
  page: number,
  size: number,
  sort: string = 'DESC'
): Promise<ServiceListResponse> => {
  const response = await fetchInstance.get<ServiceListResponse>(
    getServiceListPath,
    {
      params: {
        page,
        size,
        sort,
      },
    }
  );
  return response.data;
};
