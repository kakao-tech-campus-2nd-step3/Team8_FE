import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { RouterPath } from '@/app/routes/path';
import { useGetCallback, handleCallbackError } from '@/shared';

export const useFetchCallback = (callBackId: string) => {
  const navigate = useNavigate();
  const {
    data: callbackData,
    isLoading: isCallBackLoading,
    isError: isCallBackError,
    error: callBackError,
  } = useGetCallback(callBackId);

  useEffect(() => {
    if (isCallBackError) {
      const errorMessage: string = handleCallbackError(callBackError);
      alert(errorMessage);
      navigate(RouterPath.CALL_BACK_LIST);
    }
  }, [isCallBackError, callBackError, navigate]);

  return { callbackData, isCallBackLoading };
};
