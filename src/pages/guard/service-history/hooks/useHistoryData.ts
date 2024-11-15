import { useGetCallbackHistory, useGetHelloHistoryList } from '../hooks';

export const useHistoryData = (currentPage: number, pageSize: number) => {
  const { data: callbackHistory } = useGetCallbackHistory(
    currentPage,
    pageSize
  );
  const { data: helloCallHistory, refetch } = useGetHelloHistoryList();

  return {
    callbackHistory,
    helloCallHistory,
    refetch,
  };
};
