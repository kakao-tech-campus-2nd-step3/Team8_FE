import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useGetCallback } from '../hooks';
import { handleCallbackError } from '@/shared';

export const useCallbackDetail = (callBackId: string) => {
  const navigate = useNavigate();

  const {
    data: callbackData,
    isLoading: isCallBackLoading,
    isError,
    error,
  } = useGetCallback(callBackId);

  useEffect(() => {
    if (isError) {
      const errorMessage = handleCallbackError(error);
      alert(errorMessage);
      navigate('/sinitto/call-back');
    }
  }, [isError, error, navigate]);

  return { callbackData, isCallBackLoading };
};
