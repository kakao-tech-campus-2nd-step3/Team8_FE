import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { RouterPath } from '@/app/routes/path';
import { handleCallbackError } from '@/shared/utils';

export const useGuideLineErrorHandling = (isGuideLineError: unknown) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (isGuideLineError) {
      const errorMessage = handleCallbackError(isGuideLineError);
      alert(errorMessage);
      navigate(RouterPath.CALL_BACK_LIST);
    }
  }, [isGuideLineError, navigate]);
};
