import { AxiosError } from 'axios';

export const handleCallbackError = (error: unknown): string => {
  if (error instanceof AxiosError) {
    switch (error.response?.status) {
      case 409:
        return '이미 진행 중인 콜백 요청이 있습니다.';
      default:
        return '데이터를 불러오는 중 오류가 발생했습니다.';
    }
  }
  return '데이터를 불러오는 중 오류가 발생했습니다.';
};
