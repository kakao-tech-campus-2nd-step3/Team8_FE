import { ApplyCallListResponse } from './types';
import { fetchInstance } from '@/shared/api/instance';

export const applyCallListPath = () => `/api/hellocalls/own`;

export const getApplyCallList = async (): Promise<ApplyCallListResponse> => {
  const response =
    await fetchInstance.get<ApplyCallListResponse>(applyCallListPath());
  return response.data;
};
