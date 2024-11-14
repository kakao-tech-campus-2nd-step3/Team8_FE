import { useNavigate } from 'react-router-dom';

import { WriteReportRequest } from '../types';
import { usePostWriteReport } from './usePostWriteReport';

export const useReportSubmit = (reportContents: string) => {
  const { mutate: postWriteReport } = usePostWriteReport();
  const navigate = useNavigate();

  const handlerSubmit = (helloCallId: number) => {
    if (!reportContents.trim()) {
      alert('안부전화 내용을 간략하게 기록해주세요!');
      return;
    }

    const requestPayload: WriteReportRequest = {
      helloCallId,
      report: reportContents,
    };

    postWriteReport(requestPayload, {
      onSuccess: () => {
        localStorage.removeItem('helloCallId');

        navigate(`/sinitto/service-history`);
      },
    });
  };

  return { handlerSubmit };
};
