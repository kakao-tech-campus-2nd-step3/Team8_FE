import {
  getKakaoCallback,
  KakaoCallbackQueryKey,
  KakaoCallbackResponse,
} from '../api/kakao-callback.api';
import { useQuery } from '@tanstack/react-query';

export const useGetKakaoCallback = (code: string) => {
  return useQuery<KakaoCallbackResponse, Error>({
    queryKey: [KakaoCallbackQueryKey, code],
    queryFn: () => getKakaoCallback(code),
  });
};
