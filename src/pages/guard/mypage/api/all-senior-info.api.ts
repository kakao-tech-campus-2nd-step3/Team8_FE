import { AllSeniorInfoResponse } from './types';
import { fetchInstance } from '@/shared/api/instance';

export const allSeniorInfoPath = () => `/api/guards/senior`;

export const getAllSeniorInfo = async (): Promise<AllSeniorInfoResponse> => {
  const response =
    await fetchInstance.get<AllSeniorInfoResponse>(allSeniorInfoPath());
  return response.data;
};
