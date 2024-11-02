import { SinittoBankInfo, SinittoInformation } from './types';
import { fetchInstance } from '@/shared';

const sinittoInformationPath = () => '/api/sinittos';

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
