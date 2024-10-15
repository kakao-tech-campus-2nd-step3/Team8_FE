import { ReportResponse } from './types';
import { fetchInstance } from '@/shared/api/instance';

const getReportPath = (callId: number) => `/api/hellocalls/reports/${callId}`;

export const ReportQueryKey = [getReportPath];

export const getReport = async (callId: number): Promise<ReportResponse> => {
  const response = await fetchInstance.get<ReportResponse>(
    getReportPath(callId)
  );
  return response.data;
};
