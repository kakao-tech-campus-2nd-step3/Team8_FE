import { WriteReportRequest } from './types';
import { fetchInstance } from '@/shared/api/instance';

export const postWriteReportPath = () => `/api/hellocalls/reports`;

export const postWriteReport = async (
  data: WriteReportRequest
): Promise<WriteReportRequest> => {
  const response = await fetchInstance.post<WriteReportRequest>(
    postWriteReportPath(),
    data
  );
  return response.data;
};
