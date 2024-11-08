import { AxiosError } from 'axios';

import { acceptCallback } from '../accept-call-back.api';
import { useMutation } from '@tanstack/react-query';

type ErrorResponse = {
  detail: string;
};

export const useAcceptCallback = () => {
  return useMutation({
    mutationFn: acceptCallback,
    onError: (error) => {
      const axiosError = error as AxiosError<ErrorResponse>;
      alert(
        axiosError?.response?.data?.detail || '신청하는 중 에러가 발생했습니다.'
      );
    },
  });
};
