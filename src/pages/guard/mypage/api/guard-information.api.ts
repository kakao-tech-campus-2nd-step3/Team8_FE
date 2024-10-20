import { GuardInformationResponse } from './types';
import { fetchInstance } from '@/shared/api/instance';

export const guardInformationPath = () => '/api/guards';

export const getGuardInformation =
  async (): Promise<GuardInformationResponse> => {
    const response = await fetchInstance.get<GuardInformationResponse>(
      guardInformationPath()
    );
    return response.data;
  };
