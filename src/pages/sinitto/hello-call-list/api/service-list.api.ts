import { ServiceListResponse } from './types';
import { fetchInstance } from '@/shared/api/instance';

const getServiceListPath = (page: number) =>
  `/api/hellocalls/sinittos/list?page=${page}`;

export const ServiceListQueryKey = ['serviceList'];

export const getServiceList = async (
  page: number
): Promise<ServiceListResponse> => {
  const response = await fetchInstance.get<ServiceListResponse>(
    getServiceListPath(page)
  );
  return response.data;
};
