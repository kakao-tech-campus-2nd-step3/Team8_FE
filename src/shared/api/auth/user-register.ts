import { fetchInstance } from '../instance';

// request(요청) 타입
export type SignupReguestParams = {
  name: string;
  phoneNumber: string;
  email: string;
  isSinitto: boolean;
};

// response(응답) 타입
export type SignupResponse = {
  accessToken: string;
  refreshToken: string;
  isSinitto?: 'true' | 'false';
};
export const registerUser = async ({
  name,
  phoneNumber,
  email,
  isSinitto,
}: SignupReguestParams): Promise<SignupResponse> => {
  try {
    // 시니또 보호자에 따라 API 엔드포인트 구분
    const endpoint = isSinitto ? 'sinitto' : 'guard';

    const response = await fetchInstance.post(`/api/members/${endpoint}`, {
      name,
      phoneNumber,
      email,
      isSinitto,
    });
    return response.data;
  } catch (err) {
    throw new Error('회원가입 실패');
  }
};
