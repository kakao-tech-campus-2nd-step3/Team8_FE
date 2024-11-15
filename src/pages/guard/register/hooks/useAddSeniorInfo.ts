import { AxiosError } from 'axios';

import { addSeniorInfo } from '../apis';
import { SeniorRegisterRequest } from '../types';
import { useMutation } from '@tanstack/react-query';

type ErrorResponse = {
  detail: string;
};

export const useAddSeniorInfo = (refetchCallback: () => void) => {
  return useMutation({
    mutationFn: (seniorInfo: SeniorRegisterRequest) =>
      addSeniorInfo(seniorInfo),
    onSuccess: (data: string) => {
      alert(data);
      refetchCallback();
    },
    onError: (error) => {
      const axiosError = error as AxiosError<ErrorResponse>;
      console.error(error);
      alert(axiosError?.response?.data?.detail);
    },
  });
};
