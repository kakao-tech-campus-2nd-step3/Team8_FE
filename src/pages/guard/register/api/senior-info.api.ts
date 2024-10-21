import { SeniorRegisterValues as SeniorRegisterRequest } from './types/senior-register.type';
import { fetchInstance } from '@/shared/api/instance';

export const seniorInfoPath = () => '/api/guards/senior';

// 시니어 추가
export const addSeniorInfo = async (seniorInfo: SeniorRegisterRequest) => {
  const response = await fetchInstance.post(seniorInfoPath(), seniorInfo);
  return response.data;
};

// 시니어 삭제
export const deleteSeniorInfo = async (seniorId: number) => {
  const response = await fetchInstance.delete(
    seniorInfoPath() + `/${seniorId}`
  );
  return response.data;
};

// 시니어 정보 수정
export const editSeniorInfo = async (
  seniorId: number,
  seniorInfo: SeniorRegisterRequest
) => {
  const response = await fetchInstance.put(
    seniorInfoPath() + `/${seniorId}`,
    seniorInfo
  );
  return response.data;
};
