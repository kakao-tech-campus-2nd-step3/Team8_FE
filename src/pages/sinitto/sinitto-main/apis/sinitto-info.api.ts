import { SinittoInfoResponse } from '../types';
import { fetchInstance } from '@/shared';

export const sinittoInfoPath = () => `/api/sinittos`;

export const getSinittoInfo = async (): Promise<SinittoInfoResponse> => {
  const response =
    await fetchInstance.get<SinittoInfoResponse>(sinittoInfoPath());
  return response.data;
};
