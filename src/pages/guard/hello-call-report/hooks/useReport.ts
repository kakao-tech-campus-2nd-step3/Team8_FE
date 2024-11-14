import { useGetReport } from '../hooks';

export const useReport = (helloCallId: number) => {
  const { data: reportData, isLoading, isError } = useGetReport(helloCallId);

  return {
    reportData,
    isLoading,
    isError,
  };
};
