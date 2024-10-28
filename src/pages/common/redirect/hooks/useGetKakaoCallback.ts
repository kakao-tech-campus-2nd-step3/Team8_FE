import {
  getKakaoCallback,
  KakaoCallbackQueryKey,
  KakaoCallbackResponse,
} from '@/pages';
import { useQuery } from '@tanstack/react-query';

export const useGetKakaoCallback = (code: string) => {
  return useQuery<KakaoCallbackResponse, Error>({
    queryKey: [KakaoCallbackQueryKey, code],
    queryFn: () => getKakaoCallback(code),
  });
};
