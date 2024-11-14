import { useGetCallbacks } from '../../call-back/list/hooks';

export const useCallBackData = (limit: number = 4) => {
  const { data: callBackList, isLoading } = useGetCallbacks(limit);
  return { callBackList, isLoading };
};
