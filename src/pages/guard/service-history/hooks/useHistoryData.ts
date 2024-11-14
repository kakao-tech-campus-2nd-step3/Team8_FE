import { useGetCallbackHistory, useGetHelloHistoryList } from '../hooks';

export const useHistoryData = (currentPage: number, pageSize: number) => {
  const {
    data: callbackHistory,
    refetch: refetchCallback,
    isLoading: isLoadingCallback,
  } = useGetCallbackHistory(currentPage, pageSize);

  const {
    data: helloCallHistory,
    refetch,
    isLoading: isLoadingHelloCall,
  } = useGetHelloHistoryList();

  // 두 로딩 상태 중 하나라도 true이면 isLoading을 true로 설정
  const isLoading = isLoadingCallback || isLoadingHelloCall;

  return {
    callbackHistory,
    helloCallHistory,
    refetch,
    refetchCallback,
    isLoading,
  };
};
