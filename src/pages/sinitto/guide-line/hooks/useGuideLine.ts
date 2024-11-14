import { useNavigate } from 'react-router-dom';

import { useGetGuideline } from './';
import { handleCallbackError } from '@/shared';

export const useGuideLine = (callBackId: string, guideLineId: string) => {
  const navigate = useNavigate();

  const {
    data: guideLine,
    isLoading: isGuideLineLoading,
    isError: isGuideLineError,
  } = useGetGuideline(Number(callBackId), guideLineId);

  if (isGuideLineError) {
    const errorMessage = handleCallbackError(isGuideLineError);
    alert(errorMessage);
    navigate(`/sinitto/call-back/${callBackId}`);
  }

  return { guideLine, isGuideLineLoading };
};
