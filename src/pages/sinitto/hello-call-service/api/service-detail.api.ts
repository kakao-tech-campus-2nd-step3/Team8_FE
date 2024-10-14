import { ServiceDetailResponse } from './types/service-detail.response';
import { fetchInstance } from '@/shared/api/instance';

const getServiceDetailPath = (callId: number) => `/api/hellocalls/${callId}`;

export const ServiceDetailQueryKey = (callId: number) => [
  getServiceDetailPath(callId),
];

export const getServiceDetail = async (
  callId: number
): Promise<ServiceDetailResponse> => {
  const response = await fetchInstance.get(getServiceDetailPath(callId), {
    params: {
      callId,
    },
  });
  return response.data;
};
