import { allSeniorInfoPath } from '../../mypage/api/all-senior-info.api';
import { SeniorRegisterValues as SeniorRegisterRequest } from './types/senior-register.type';
import { fetchInstance } from '@/shared/api/instance';

// 시니어 추가
export const addSeniorInfo = async (seniorInfo: SeniorRegisterRequest) => {
  const response = await fetchInstance.post(allSeniorInfoPath(), seniorInfo);
  return response.data;
};
