import { getServiceDetailPath, getServiceDetail } from '../service-detail.api';
import { ServiceDetailResponse } from '../types';
import { useQuery } from '@tanstack/react-query';

export const ServiceDetailQueryKey = (callId: number) => [
  getServiceDetailPath(callId),
];

export const useGetServiceDetail = (callId: number) => {
  return useQuery<ServiceDetailResponse>({
    queryKey: ServiceDetailQueryKey(callId),
    queryFn: () => getServiceDetail(callId),
  });
};
