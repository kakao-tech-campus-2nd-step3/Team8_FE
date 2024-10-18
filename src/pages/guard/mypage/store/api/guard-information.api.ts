import { fetchInstance } from '@/shared/api/instance';

export type GuardInformationResponse = {
  name: string;
  email: string;
  phoneNumber: string;
};

const getGuardInformationPath = () => '/api/guards';

export const getGuardInformationQueryKey = ['guardInformation'];

export const getGuardInformation =
  async (): Promise<GuardInformationResponse> => {
    const response = await fetchInstance.get(getGuardInformationPath());
    console.log(response.data);
    return response.data;
  };
