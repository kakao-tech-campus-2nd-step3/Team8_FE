import { useGetGuideline } from './useGetGuideline';

export const useGuideLineData = (callBackId: string, guideLineId: string) => {
  const {
    data: guideLine,
    isLoading: isGuideLineLoading,
    isError: isGuideLineError,
  } = useGetGuideline(Number(callBackId), guideLineId);

  return { guideLine, isGuideLineLoading, isGuideLineError };
};
