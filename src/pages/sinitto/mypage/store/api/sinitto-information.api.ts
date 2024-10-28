import { fetchInstance } from '@/shared/api/instance';

export type SinittoInformation = {
  name: string;
  email: string;
  phoneNumber: string;
  accountNumber: string;
  bankName: string;
};

export type SinittoBankInfo = {
  accountNumber: string;
  bankName: string;
};

const sinittoInformationPath = () => '/api/sinittos';

export const getSinittoInformationQueryKey = ['sinittoInformation'];

// 본인 정보 조회
export const getSinittoInformation = async (): Promise<SinittoInformation> => {
  const response = await fetchInstance.get(sinittoInformationPath());
  return response.data;
};

// 계좌 정보 수정
export const modifySinittoBankInfomation = async (
  bankInfo: SinittoBankInfo
) => {
  const response = await fetchInstance.put(
    `${sinittoInformationPath()}/bank`,
    bankInfo
  );
  return response.data;
};

// 본인 정보 수정
export const modifySinittoInfomation = async (
  sinittoInfo: SinittoInformation
) => {
  const response = await fetchInstance.put(
    sinittoInformationPath(),
    sinittoInfo
  );
  return response.data;
};
