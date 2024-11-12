import { ServiceDetailResponse } from '../types';
import { fetchInstance } from '@/shared/api/instance';

export const getServiceDetailPath = (callId: number) =>
  `/api/hellocalls/${callId}`;

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
