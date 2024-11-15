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
