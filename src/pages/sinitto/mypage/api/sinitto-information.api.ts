import {
  SinittoBankInfo,
  SinittoInfoRequest,
  SinittoInformation,
} from './types';
import { fetchInstance } from '@/shared';

const sinittoInformationPath = () => '/api/sinittos';

// 계좌 정보 조회
export const getSinittoBankInfo = async (): Promise<SinittoBankInfo> => {
  const response = await fetchInstance.get<SinittoBankInfo>(
    `${sinittoInformationPath()}/bank`
  );
  return response.data;
};

// 계좌 정보 수정
export const modifySinittoBankInformation = async (
  bankInfo: SinittoBankInfo
) => {
  const response = await fetchInstance.put(
    `${sinittoInformationPath()}/bank`,
    bankInfo
  );
  return response.data;
};

// 계좌 정보 등록
export const registerSinittoBankInformation = async (
  bankInfo: SinittoBankInfo
) => {
  const response = await fetchInstance.post(
    `${sinittoInformationPath()}/bank`,
    bankInfo
  );
  return response.data;
};

// 본인 정보 조회
export const getSinittoInformation = async (): Promise<SinittoInformation> => {
  const response = await fetchInstance.get<SinittoInformation>(
    sinittoInformationPath()
  );
  return response.data;
};

// 본인 정보 수정
export const modifySinittoInformation = async (
  sinittoInfo: SinittoInfoRequest
) => {
  const response = await fetchInstance.put(
    sinittoInformationPath(),
    sinittoInfo
  );
  return response.data;
};
