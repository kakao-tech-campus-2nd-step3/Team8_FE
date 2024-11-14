import { GuardInformationResponse, GuardInformationRequest } from '../types';
import { fetchInstance } from '@/shared/api/instance';

export const guardInformationPath = () => '/api/guards';

export const getGuardInformation =
  async (): Promise<GuardInformationResponse> => {
    const response = await fetchInstance.get<GuardInformationResponse>(
      guardInformationPath()
    );
    return response.data;
  };

export const modifyGuardInformation = async (
  sinittoInfo: GuardInformationRequest
) => {
  const response = await fetchInstance.put(guardInformationPath(), sinittoInfo);
  return response.data;
};
