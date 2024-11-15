import { fetchInstance } from '@/shared/api/instance';

export type KakaoCallbackResponse = {
  accessToken: string;
  refreshToken: string;
  redirectUrl: string;
  email: string;
  isSinitto: boolean;
  isMember: boolean;
};

const getKakaoCallbackPath = () => '/api/auth/oauth/kakao/callback';

export const KakaoCallbackQueryKey = [getKakaoCallbackPath()];

export const getKakaoCallback = async (
  code: string
): Promise<KakaoCallbackResponse> => {
  const response = await fetchInstance.get(getKakaoCallbackPath(), {
    params: {
      code,
    },
  });
  return response.data;
};
