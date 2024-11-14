import { ErrorResponse } from 'react-router-dom';

import { AxiosError } from 'axios';

import { postWriteReport } from '../apis';
import { WriteReportRequest } from '../types';
import { useMutation, UseMutationResult } from '@tanstack/react-query';

export const usePostWriteReport = (): UseMutationResult<
  WriteReportRequest,
  Error,
  WriteReportRequest
> => {
  return useMutation<WriteReportRequest, Error, WriteReportRequest>({
    mutationFn: (requestPayload: WriteReportRequest) =>
      postWriteReport(requestPayload),
    onSuccess: () => {
      alert('보고서가 작성되었습니다.');
    },
    onError: (error) => {
      const axiosError = error as AxiosError<ErrorResponse>;
      if (axiosError.response?.status === 409) {
        alert(
          '서비스 수행 기간에는 보고서 작성 및 서비스 완료를 할 수 없습니다.'
        );
      } else {
        console.error('보고서 작성에 실패했습니다.', error);
        alert('보고서 작성에 실패했습니다.');
      }
    },
  });
};
