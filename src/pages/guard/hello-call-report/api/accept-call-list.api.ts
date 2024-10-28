import { AcceptCallListResponse } from './types';
import { fetchInstance } from '@/shared/api/instance';

export const acceptCallListPath = () => `/api/hellocalls/own`;

export const getAcceptCallList = async (): Promise<AcceptCallListResponse> => {
  const response =
    await fetchInstance.get<AcceptCallListResponse>(acceptCallListPath());
  return response.data;
};
