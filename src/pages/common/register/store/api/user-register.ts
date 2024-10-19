import { fetchInstance } from '../../../../../shared/api/instance';

// request(요청) 타입
export type SignupReguestParams = {
  name: string;
  phoneNumber: string;
  email: string;
  isSinitto: boolean;
};

// response(응답) 타입 - 성공
export type SignupResponse = {
  accessToken: string;
  refreshToken: string;
  isSinitto?: 'true' | 'false';
};

// 에러(아직 정확히 에러코드 확인 x) or 예외
export type SignupErrorResponse = {
  status: number;
  detail: string;
};

// 공통 타입 정의 (onSuccess 내부에서 분기)
export type SignupApiResponse = SignupResponse | SignupErrorResponse;

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
