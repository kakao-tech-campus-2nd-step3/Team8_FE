import {
  SignupApiResponse,
  SignupErrorResponse,
  SignupReguestParams,
} from '../../types';
import { fetchInstance } from '@/shared';

export const registerUser = async ({
  name,
  phoneNumber,
  email,
  isSinitto,
}: SignupReguestParams): Promise<SignupApiResponse> => {
  // 시니또 보호자에 따라 API 엔드포인트 구분
  const endpoint = isSinitto ? 'sinitto' : 'guard';

  const response = await fetchInstance.post(`/api/members/${endpoint}`, {
    name,
    phoneNumber,
    email,
    isSinitto,
  });
  if (response.status === 207) {
    return {
      status: response.status,
      detail: response.data.detail,
    } as SignupErrorResponse; // 207 (예외 - 중복 이메일)
  }
  return response.data; // 200
};
