import { useGetCallbackList } from '@/pages/sinitto';

export const useCallBackData = (limit: number = 4) => {
  const { data: callBackList, isLoading } = useGetCallbackList(limit);
  return { callBackList, isLoading };
};
