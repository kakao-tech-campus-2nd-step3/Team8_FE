import { WriteReportRequest } from '../types';
import { postWriteReport } from '../write-report.api';
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
      console.error('보고서 작성에 실패했습니다.', error);
      alert('보고서 작성에 실패했습니다.');
    },
  });
};
