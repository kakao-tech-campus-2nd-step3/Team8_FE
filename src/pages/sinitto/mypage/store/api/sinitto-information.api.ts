import { fetchInstance } from '@/shared/api/instance';

export type SinittoInformation = {
  name: string;
  email: string;
  phoneNumber: string;
  accountNumber: string;
  bankName: string;
};

const getSinittoInformationPath = () => '/api/sinittos';

export const getSinittoInformationQueryKey = ['sinittoInformation'];

export const getSinittoInformation = async (): Promise<SinittoInformation> => {
  const response = await fetchInstance.get(getSinittoInformationPath());
  console.log(response.data);
  return response.data;
};
