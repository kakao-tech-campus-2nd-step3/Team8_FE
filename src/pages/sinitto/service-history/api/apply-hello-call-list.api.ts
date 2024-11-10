import { ApplyHelloCallListResponse } from './types';
import { fetchInstance } from '@/shared/api/instance';

export const applyHelloCallListPath = () => `/api/hellocalls/own`;

export const getApplyHelloCallList =
  async (): Promise<ApplyHelloCallListResponse> => {
    const response = await fetchInstance.get<ApplyHelloCallListResponse>(
      applyHelloCallListPath()
    );
    return response.data;
  };
