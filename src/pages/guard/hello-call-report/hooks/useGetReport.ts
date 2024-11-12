import { getReport, getReportPath } from '../report.api';
import { ReportResponse } from '../types';
import { useQuery } from '@tanstack/react-query';

const ReportQueryKey = [getReportPath];

export const useGetReport = (callId: number) => {
  return useQuery<ReportResponse>({
    queryKey: [ReportQueryKey, callId],
    queryFn: () => getReport(callId),
  });
};
