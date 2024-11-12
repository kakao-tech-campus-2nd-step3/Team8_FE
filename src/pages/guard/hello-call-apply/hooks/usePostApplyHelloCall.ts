import { ErrorResponse } from 'react-router-dom';

import { AxiosError } from 'axios';

import { applyHelloCallPath, postApplyHelloCall } from '../apis';
import { ApplyHelloCallRequest, ApplyHelloCallResponse } from '../types';
import { UseMutationResult, useMutation } from '@tanstack/react-query';

export const ApplyHelloCallQueryKey = [applyHelloCallPath()];

export const usePostApplyHelloCall = (): UseMutationResult<
  ApplyHelloCallResponse,
  Error,
  ApplyHelloCallRequest
> => {
  return useMutation<ApplyHelloCallResponse, Error, ApplyHelloCallRequest>({
    mutationFn: (data: ApplyHelloCallRequest) => postApplyHelloCall(data),
    onSuccess: () => {
      alert('안부전화 서비스가 신청되었습니다.');
    },
    onError: (error) => {
      const axiosError = error as AxiosError<ErrorResponse>;
      if (axiosError.response?.status === 409) {
        alert(
          '이미 해당 시니어에게 할당되어 대기중 또는 진행중인 안부 전화 서비스가 존재합니다.'
        );
      } else {
        console.error('안부전화 서비스 신청에 실패했습니다.', error);
        alert('안부전화 서비스 신청에 실패했습니다.');
      }
    },
  });
};
